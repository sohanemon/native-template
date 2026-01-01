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
			<Img src="/favicon.png" width={50} />
			<Text variant="h4" className="pt-4">
				{appConfig.label}
			</Text>
			<Text variant="muted"> v{appConfig.version}</Text>
		</View>
	);
}
