import { Stack } from 'expo-router';
import { View } from 'react-native';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
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
						<Button variant="secondary" href="/">
							Go to Home
						</Button>
					</Card>
				</View>
			</Container>
		</>
	);
}
