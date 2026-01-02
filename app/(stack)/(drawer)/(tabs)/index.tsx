import { DrawerActions } from '@react-navigation/native';
import { useNavigation, useRouter } from 'expo-router';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import { Container } from '@/components/layout/container';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { swipeGesture } from '@/lib/utils/swipe-gesture-handler';

export default function Home() {
	const router = useRouter();
	const navigation = useNavigation();

	return (
		<GestureDetector
			gesture={swipeGesture({
				onLeft: () => {
					router.push('./two');
				},
				onRight: () => {
					navigation.dispatch(DrawerActions.openDrawer());
				},
			})}
		>
			<View className="flex-1">
				<Container className="p-6">
					<View className="flex-1 items-center justify-center">
						<Card className="items-center p-8">
							<CardTitle className="mb-2 text-3xl">Tab 1</CardTitle>
							<CardDescription>Swipe Left to Right for tab-2</CardDescription>
						</Card>
					</View>
				</Container>
			</View>
		</GestureDetector>
	);
}
