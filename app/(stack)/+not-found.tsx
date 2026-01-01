import { Link, Stack } from 'expo-router';
import { Pressable, View } from 'react-native';

import { Container } from '@/components/layout/container';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<Container>
				<View className="flex-1 items-center justify-center p-6">
					<Card className="max-w-md items-center p-8">
						<Text variant="h1" className="mb-4">
							🤔
						</Text>
						<CardTitle className="mb-2 text-center text-2xl">
							Page Not Found
						</CardTitle>
						<CardDescription className="mb-6 text-center">
							Sorry, the page you're looking for doesn't exist.
						</CardDescription>
						<Link href="/" asChild>
							<Pressable className="rounded-lg bg-accent px-6 py-3 active:opacity-70">
								<Text variant="small" className="text-accent-foreground">
									Go to Home
								</Text>
							</Pressable>
						</Link>
					</Card>
				</View>
			</Container>
		</>
	);
}
