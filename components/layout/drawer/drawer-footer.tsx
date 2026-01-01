import { type ViewProps, Linking, TouchableOpacity, View } from 'react-native';
import { Icon } from '@/components/icon';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type DrawerFooterProps = ViewProps;

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
	return (
		<View className={cn('flex-row justify-center gap-6', className)} {...props}>
			<Button
				variant="outline"
				size="icon"
				onPress={() => Linking.openURL('https://sohanscript.web.app')}
				className="rounded-full"
			>
				<Icon.Fontisto
					name="world-o"
					size={44}
					className="text-muted-foreground"
				/>
			</Button>
			<Button
				variant="outline"
				onPress={() => Linking.openURL('https://github.com/sohanemon')}
				className="rounded-full"
				size="icon"
			>
				<Icon.Octicons
					name="mark-github"
					size={36}
					className="text-muted-foreground"
				/>
			</Button>
			<Button
				variant="outline"
				size="icon"
				onPress={() => Linking.openURL('https://linkedin.com/in/sohanemon')}
				className="rounded-full"
			>
				<Icon.FontAwesome
					name="linkedin"
					size={36}
					className="text-muted-foreground"
				/>
			</Button>
		</View>
	);
}
