import { Linking, View, type ViewProps } from 'react-native';
import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
					size={20}
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
					size={20}
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
					size={20}
					className="text-muted-foreground"
				/>
			</Button>
		</View>
	);
}
