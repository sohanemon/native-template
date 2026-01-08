import { Stack } from 'expo-router/stack';
import type * as React from 'react';
import { useTheme } from '@/lib/context/theme';
import { StackBack } from './stack-back';

type StackLayoutProps = React.ComponentProps<typeof Stack> & {
	children?: React.ReactNode;
};

export function StackLayout({
	children,
	screenOptions,
	...props
}: StackLayoutProps) {
	const { colors } = useTheme();

	return (
		<Stack
			screenOptions={{
				headerTintColor: colors.foreground,
				headerStyle: { backgroundColor: colors.background },
				animation: 'ios_from_right',
				headerBackVisible: false,
				headerLeft: () => <StackBack />,
				headerShadowVisible: false,
				contentStyle: { backgroundColor: colors.background },
				...screenOptions,
			}}
			{...props}
		>
			{children}
		</Stack>
	);
}
