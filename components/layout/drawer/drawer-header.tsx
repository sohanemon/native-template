import { View, type ViewProps } from 'react-native';
import { Img } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { appConfig } from '@/lib/config/app';
import { useTheme } from '@/lib/context/theme';
import { cn } from '@/lib/utils';

type DrawerHeaderProps = ViewProps;

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
	const { colorScheme } = useTheme();
	return (
		<View
			className={cn('items-center justify-center py-5', className)}
			{...props}
		>
			<View className="rounded-xl bg-muted p-4">
				<Img
					src="/logo.png"
					style={{ filter: colorScheme === 'dark' ? 'invert(1)' : undefined }}
					width={60}
					className="invert"
					contentFit="contain"
				/>
			</View>
			<Text variant="h4" className="pt-4">
				{appConfig.label}
			</Text>
			<Text variant="muted"> v{appConfig.version}</Text>
		</View>
	);
}
