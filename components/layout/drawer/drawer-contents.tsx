import {
	type DrawerContentComponentProps,
	DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import { DrawerBody } from './drawer-body';
import { DrawerFooter } from './drawer-footer';
import { DrawerHeader } from './drawer-header';

// BUG: to see changes, it requires to reload

export function DrawerContents(props: DrawerContentComponentProps) {
	const currentRoute = props.state.routes[props.state.index].name;
	return (
		<DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
			<View className="flex-1">
				<DrawerHeader />

				<DrawerBody
					className="flex-1"
					navigation={props.navigation}
					currentRoute={currentRoute}
				/>

				<DrawerFooter className="mb-safe border-muted border-t pt-4 pb-2" />
			</View>
		</DrawerContentScrollView>
	);
}
