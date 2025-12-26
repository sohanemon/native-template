import { Ionicons } from "@expo/vector-icons";
import { Card, Chip, useThemeColor } from "heroui-native";
import { View } from "react-native";

import { Container } from "@/components/container";
import { Typography } from "@/components/ui/typography";
import { api } from "@/lib/trpc/api";

export default function Home() {
	const { isLoading, data } = api.healthCheck.useQuery();
	const mutedColor = useThemeColor("muted");
	const successColor = useThemeColor("success");
	const dangerColor = useThemeColor("danger");

	const isConnected = data === "OK";

	return (
		<Container className="p-6">
			<View className="mb-6 py-4">
				<Typography variant="h1" className="mb-2">
					Native Template
				</Typography>
			</View>

			<Card variant="secondary" className="p-6">
				<View className="mb-4 flex-row items-center justify-between">
					<Card.Title>System Status</Card.Title>
					<Chip
						variant="secondary"
						color={isConnected ? "success" : "danger"}
						size="sm"
					>
						<Chip.Label>{isConnected ? "LIVE" : "OFFLINE"}</Chip.Label>
					</Chip>
				</View>
				<Card className="p-4">
					<View className="flex-row items-center">
						<View
							className={`mr-3 h-3 w-3 rounded-full ${isConnected ? "bg-success" : "bg-muted"}`}
						/>
						<View className="flex-1">
							<Typography variant="large" className="mb-1">
								TRPC Backend
							</Typography>
							<Card.Description>
								{isLoading
									? "Checking connection..."
									: isConnected
										? "Connected to API"
										: "API Disconnected"}
							</Card.Description>
						</View>
						{isLoading && (
							<Ionicons name="hourglass-outline" size={20} color={mutedColor} />
						)}
						{!isLoading && isConnected && (
							<Ionicons
								name="checkmark-circle"
								size={20}
								color={successColor}
							/>
						)}
						{!isLoading && !isConnected && (
							<Ionicons name="close-circle" size={20} color={dangerColor} />
						)}
					</View>
				</Card>
			</Card>
		</Container>
	);
}
