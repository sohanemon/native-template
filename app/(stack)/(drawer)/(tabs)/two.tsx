import { Link } from 'expo-router';
import { View } from 'react-native';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export default function TabTwo() {
	return (
		<Container className="p-6">
			<View className="flex-1 items-center justify-center">
				<Card className="items-center p-8">
					<CardTitle className="mb-2 text-3xl">Tab 2</CardTitle>
				</Card>
			</View>
			<Link href="/other" className="mx-auto my-4">
				<Button pointerEvents="none">
					<Text>Go to Other</Text>
				</Button>
			</Link>
		</Container>
	);
}
