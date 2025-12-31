import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { Container } from "@/components/container";
import { Text } from "@/components/ui/text";
import { api } from "@/lib/trpc/api";

export default function Home() {
	const { isLoading, data, refetch, isRefetching } =
		api.healthcheck.check.useQuery();

	const isConnected = data?.status === "OK";

	return (
		<Container className="p-6">
			<View className="mb-6 py-4">
				<Text variant="h1" className="mb-2">
					Native Template
				</Text>
			</View>

			{/* <Card variant="secondary" className="p-6"> */}
			{/* 	<View className="mb-4 flex-row items-center justify-between"> */}
			{/* 		<Card.Title>System Status</Card.Title> */}
			{/* 		<Chip */}
			{/* 			variant="secondary" */}
			{/* 			color={isConnected ? "success" : "danger"} */}
			{/* 			size="sm" */}
			{/* 		> */}
			{/* 			<Chip.Label>{isConnected ? "LIVE" : "OFFLINE"}</Chip.Label> */}
			{/* 		</Chip> */}
			{/* 	</View> */}
			{/* 	<Card className="p-4"> */}
			{/* 		<View className="flex-row items-center"> */}
			{/* 			<View */}
			{/* 				className={`mr-3 h-3 w-3 rounded-full ${isConnected ? "bg-success" : "bg-muted"}`} */}
			{/* 			/> */}
			{/* 			<View className="flex-1"> */}
			{/* 				<Text variant="large" className="mb-1"> */}
			{/* 					TRPC Backend */}
			{/* 				</Text> */}
			{/* 				<Card.Description> */}
			{/* 					{isLoading */}
			{/* 						? "Checking connection..." */}
			{/* 						: isConnected */}
			{/* 							? "Connected to API" */}
			{/* 							: "API Disconnected"} */}
			{/* 				</Card.Description> */}
			{/* 			</View> */}
			{/* 			{isLoading && ( */}
			{/* 				<Ionicons name="hourglass-outline" size={20} color={mutedColor} /> */}
			{/* 			)} */}
			{/* 			{!isLoading && isConnected && ( */}
			{/* 				<Ionicons */}
			{/* 					name="checkmark-circle" */}
			{/* 					size={20} */}
			{/* 					color={successColor} */}
			{/* 				/> */}
			{/* 			)} */}
			{/* 			{!isLoading && !isConnected && ( */}
			{/* 				<Ionicons name="close-circle" size={20} color={dangerColor} /> */}
			{/* 			)} */}
			{/* 		</View> */}
			{/* 	</Card> */}
			{/* </Card> */}
			{/* <Button */}
			{/* 	onPress={() => { */}
			{/* 		toast.show({ */}
			{/* 			variant: "danger", */}
			{/* 			label: "Refreshing", */}
			{/* 			description: "Checking backend status...", */}
			{/* 		}); */}
			{/* 		refetch(); */}
			{/* 	}} */}
			{/* 	className="mt-5" */}
			{/* 	variant="secondary" */}
			{/* > */}
			{/* 	{isRefetching ? "Reloading" : "Reload"} */}
			{/* </Button> */}
		</Container>
	);
}
