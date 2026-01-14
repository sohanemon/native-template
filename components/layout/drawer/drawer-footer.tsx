import { Linking, View, type ViewProps } from 'react-native';
import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type DrawerFooterProps = ViewProps;

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
	return (
		<View className={cn('flex-row justify-center gap-6', className)} {...props}>
			<Button
				className="rounded-full"
				onPress={() => Linking.openURL('https://sohanscript.web.app')}
				size="icon"
				variant="outline"
			>
				<Icon.Fontisto
					className="text-muted-foreground"
					name="world-o"
					size={20}
				/>
			</Button>
			<Button
				className="rounded-full"
				onPress={() => Linking.openURL('https://github.com/sohanemon')}
				size="icon"
				variant="outline"
			>
				<Icon.FontAwesome6
					className="text-muted-foreground"
					name="github"
					size={20}
				/>
			</Button>
			<Button
				className="rounded-full"
				onPress={() => Linking.openURL('https://linkedin.com/in/sohanemon')}
				size="icon"
				variant="outline"
			>
				<Icon.FontAwesome6
					className="text-muted-foreground"
					name="linkedin"
					size={20}
				/>
			</Button>
		</View>
	);
}
