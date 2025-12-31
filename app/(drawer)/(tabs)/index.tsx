import { View } from "react-native";
import { Container } from "@/components/container";
import { Card, CardTitle } from "@/components/ui/card";

export default function Home() {
	return (
		<Container className="p-6">
			<View className="flex-1 items-center justify-center">
				<Card className="items-center p-8">
					<CardTitle className="mb-2 text-3xl">Tab 1</CardTitle>
				</Card>
			</View>
		</Container>
	);
}
