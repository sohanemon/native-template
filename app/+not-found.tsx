import { Link, Stack } from "expo-router";
import { Card } from "heroui-native";
import { Pressable, Text, View } from "react-native";

import { Container } from "@/components/container";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<Container>
				<View className="flex-1 items-center justify-center p-6">
					<Card variant="secondary" className="max-w-md items-center p-8">
						<Text className="mb-4 text-6xl">🤔</Text>
						<Card.Title className="mb-2 text-center text-2xl">
							Page Not Found
						</Card.Title>
						<Card.Description className="mb-6 text-center">
							Sorry, the page you're looking for doesn't exist.
						</Card.Description>
						<Link href="/" asChild>
							<Pressable className="rounded-lg bg-accent px-6 py-3 active:opacity-70">
								<Text className="font-medium text-accent-foreground text-base">
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
