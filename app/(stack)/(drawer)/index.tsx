import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import { Icon } from '@/components/icon';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Img } from '@/components/ui/image';
import { Reanimated } from '@/components/ui/reanimated';
import { Text } from '@/components/ui/text';
import { useCounter } from '@/lib/store/counter';
import { api } from '@/lib/trpc/api';
import { swipeGesture } from '@/lib/utils/swipe-gesture-handler';

export default function Home() {
	const { isLoading, data } = api.healthcheck.check.useQuery();
	const { data: url } = api.asset.from.useQuery({
		path: '/remote/logo.png',
	});
	console.info('⚡[index.tsx:18] url:', url);
	const navigation = useNavigation();
	const isConnected = data?.status === 'OK';
	const { count, increment, decrement, direction } = useCounter();

	return (
		<GestureDetector
			gesture={swipeGesture({
				onRight: () => {
					navigation.dispatch(DrawerActions.openDrawer());
				},
			})}
		>
			<Container>
				<View className="mb-6 py-4">
					<Text className="mb-2 text-primary" variant="h1">
						Native Template
					</Text>
				</View>
				<Img src={url?.url ?? ''} width={300} />

				<Reanimated duration={200} entering="slide-up">
					<Card className="p-6">
						<View className="mb-4 flex-row items-center justify-between">
							<CardTitle>System Status</CardTitle>
							<Text className="text-sm">
								{isConnected ? 'LIVE' : 'OFFLINE'}
							</Text>
						</View>
						<View className="flex-row items-center">
							<View
								className={`top-2 mr-3 h-3 w-3 self-start rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-500'}`}
							/>
							<View className="flex-1">
								<Text className="mb-1" variant="large">
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
									color="#9ca3af"
									name="hourglass-outline"
									size={20}
								/>
							)}
							{!isLoading && isConnected && (
								<Icon.Ionicons
									color="#22c55e"
									name="checkmark-circle"
									size={20}
								/>
							)}
							{!(isLoading || isConnected) && (
								<Icon.Ionicons color="#ef4444" name="close-circle" size={20} />
							)}
						</View>
					</Card>
				</Reanimated>

				<Reanimated delay={100} duration={200} entering="slide-up">
					<Card className="mt-4 p-6">
						<CardTitle className="mb-4">Counter</CardTitle>
						<View className="flex-row items-center justify-between">
							<Button onPress={decrement} size="lg" variant="outline">
								<Icon.Feather name="minus" size={20} />
							</Button>
							<View className="min-w-16 items-center">
								<Reanimated
									as={Text}
									duration={200}
									entering={direction === 'forward' ? 'slide-up' : 'slide-down'}
									exiting={direction === 'forward' ? 'slide-down' : 'slide-up'}
									key={count}
									variant="h2"
								>
									{count}
								</Reanimated>
							</View>
							<Button onPress={increment} size="lg" variant="outline">
								<Icon.Feather name="plus" size={20} />
							</Button>
						</View>
					</Card>
				</Reanimated>

				<View className="mb-safe-offset-5 flex-1 justify-end pt-5">
					<Text className="text-center">Remove TRPC and Tanstack Query?</Text>
					<Text className="text-center" variant="muted">
						Run `bun lib/scripts/remove-trpc-server.ts`
					</Text>
				</View>
			</Container>
		</GestureDetector>
	);
}
