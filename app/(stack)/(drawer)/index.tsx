import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import { Icon } from '@/components/icon';
import { Container } from '@/components/layout/container';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { api } from '@/lib/trpc/api';
import { swipeGesture } from '@/lib/utils/swipe-gesture-handler';

export default function Home() {
	const { isLoading, data } = api.healthcheck.check.useQuery();
	const navigation = useNavigation();
	const isConnected = data?.status === 'OK';

	return (
		<GestureDetector
			gesture={swipeGesture({
				onRight: () => {
					navigation.dispatch(DrawerActions.openDrawer());
				},
			})}
		>
			<Container className="p-6">
				<View className="mb-6 py-4">
					<Text variant="h1" className="mb-2 text-primary">
						Native Template
					</Text>
				</View>

				<Card className="p-6">
					<View className="mb-4 flex-row items-center justify-between">
						<CardTitle>System Status</CardTitle>
						<Text className="text-sm">{isConnected ? 'LIVE' : 'OFFLINE'}</Text>
					</View>
					<View className="flex-row items-center">
						<View
							className={`top-2 mr-3 h-3 w-3 self-start rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-500'}`}
						/>
						<View className="flex-1">
							<Text variant="large" className="mb-1">
								TRPC Backend
							</Text>
							<CardDescription>
								{isLoading
									? 'Checking connection...'
									: isConnected
										? 'Connected to API'
										: 'API Disconnected'}
							</CardDescription>
						</View>
						{isLoading && (
							<Icon.Ionicons
								name="hourglass-outline"
								size={20}
								color="#9ca3af"
							/>
						)}
						{!isLoading && isConnected && (
							<Icon.Ionicons
								name="checkmark-circle"
								size={20}
								color="#22c55e"
							/>
						)}
						{!isLoading && !isConnected && (
							<Icon.Ionicons name="close-circle" size={20} color="#ef4444" />
						)}
					</View>
				</Card>
			</Container>
		</GestureDetector>
	);
}
