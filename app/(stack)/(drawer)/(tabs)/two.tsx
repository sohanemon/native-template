import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { swipeGesture } from '@/lib/utils/swipe-gesture-handler';
import { Alert } from 'react-native';

export default function TabTwo() {
	const router = useRouter();

	return (
		<GestureDetector
			gesture={swipeGesture({
				onRight: () => {
					router.push('./');
				},
				onUp: () => {
					Alert.alert('☝ ', 'You just swiped up');
				},
			})}
		>
			<View className="flex-1">
				<Container className="p-6">
					<View className="flex-1 items-center justify-center">
						<Card className="items-center p-8">
							<CardTitle className="mb-2 text-3xl">Tab 2</CardTitle>
							<CardDescription className="text-center">
								Swipe Right to Left for tab-1.{'\n'} Swipe Up for Alert.
							</CardDescription>
						</Card>
					</View>
					<View className="mx-auto my-4">
						<Button href="/other">Go to another page</Button>
					</View>
				</Container>
			</View>
		</GestureDetector>
	);
}
