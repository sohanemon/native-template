import { View } from 'react-native';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';

export default function TabTwo() {
	return (
		<Container className="p-6">
			<View className="flex-1 items-center justify-center">
				<Card className="items-center p-8">
					<CardTitle className="mb-2 text-3xl">Tab 2</CardTitle>
				</Card>
			</View>
			<View className="mx-auto my-4">
				<Button href="/other">Go to Other</Button>
			</View>
		</Container>
	);
}
