import * as SecureStore from 'expo-secure-store';
import { useCallback, useEffect, useRef, useState } from 'react';

type DefaultValue<T> = T | (() => T) | (() => Promise<T>);

type UseStorageStateOptions<T> = {
	defaultValue: DefaultValue<T>;
};

export function useStorageState<T>(
	key: string,
	opts: UseStorageStateOptions<T>,
): [T, (newValue: T | ((prev: T) => T)) => Promise<void>] {
	const { defaultValue } = opts;
	const [value, setValue] = useState<T>();
	const [isInitialized, setIsInitialized] = useState(false);
	const initializingRef = useRef(false);
	const defaultValueRef = useRef(defaultValue);
	const isSavingRef = useRef(false);

	defaultValueRef.current = defaultValue;

	const resolveDefaultValue = useCallback(async (): Promise<T> => {
		const def = defaultValueRef.current;
		if (typeof def === 'function') {
			const result = (def as () => T | Promise<T>)();
			return result instanceof Promise ? await result : result;
		}
		return def;
	}, []);

	useEffect(() => {
		if (initializingRef.current) return;
		initializingRef.current = true;

		async function loadValue() {
			try {
				const storedValue = await SecureStore.getItemAsync(key);
				setValue(
					storedValue !== null
						? (JSON.parse(storedValue) as T)
						: await resolveDefaultValue(),
				);
			} catch (error) {
				console.info(`⚡[useStorageState.ts:${key}] GET error:`, error);
				setValue(await resolveDefaultValue());
			} finally {
				setIsInitialized(true);
			}
		}
		loadValue();
	}, [key, resolveDefaultValue]);

	const updateValue = useCallback(
		async (newValue: T | ((prev: T) => T)) => {
			setValue((prevValue) => {
				if (!isInitialized || prevValue === undefined) return prevValue;

				const nextValue =
					typeof newValue === 'function'
						? (newValue as (prev: T) => T)(prevValue)
						: newValue;

				if (isSavingRef.current) return nextValue;

				isSavingRef.current = true;

				SecureStore.setItemAsync(key, JSON.stringify(nextValue))
					.catch((error) => {
						console.info(`⚡[useStorageState.ts:${key}] SAVE error:`, error);
						setValue(prevValue);
						throw error;
					})
					.finally(() => {
						isSavingRef.current = false;
					});

				return nextValue;
			});
		},
		[key, isInitialized],
	);

	return [value as T, updateValue];
}
