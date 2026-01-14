import { View, type ViewProps } from 'react-native';
import { Img } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { appConfig } from '@/lib/config/app';
import { cn } from '@/lib/utils';

type DrawerHeaderProps = ViewProps;

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
	return (
		<View
			className={cn('items-center justify-center py-5', className)}
			{...props}
		>
			<View className="rounded-xl bg-muted p-4">
				<Img
					className="invert"
					contentFit="contain"
					src="/static/logo.png"
					width={60}
				/>
			</View>
			<Text className="pt-4" variant="h4">
				{appConfig.name}
			</Text>
			<Text variant="muted"> v{appConfig.version}</Text>
		</View>
	);
}
