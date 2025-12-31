import { Text, View } from "react-native";

import { Container } from "@/components/container";

export default function Home() {
	return (
		<Container className="p-6">
			<View className="flex-1 items-center justify-center">
				<View className="items-center p-8">
					<Text className="mb-2 text-3xl">Tab One</Text>
				</View>
			</View>
		</Container>
	);
}
