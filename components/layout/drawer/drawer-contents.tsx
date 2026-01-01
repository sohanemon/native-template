import {
	type DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerFooter } from './drawer-footer';
import { DrawerHeader } from './drawer-header';

// BUG: to see changes, it requires to reload

export function DrawerContents(props: DrawerContentComponentProps) {
	return (
		<DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
			<View className="min-h-screen flex-1">
				<DrawerHeader />

				<DrawerItemList {...props} />

				<View className="flex-1" />

				<SafeAreaView>
					<DrawerFooter className="border-muted border-t pt-3 pb-px" />
				</SafeAreaView>
			</View>
		</DrawerContentScrollView>
	);
}
