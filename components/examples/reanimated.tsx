import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { useResolveClassNames } from 'uniwind';
import { Reanimated } from '../ui/reanimated';

const COLORS = ['#F77F7D', '#A98AF3', '#FFE066', '#7FD3A4', '#7CC9EA'];

export function ReanimatedExample() {
	const [expandedId, setExpandedId] = useState(0);

	return (
		<View className="flex-row gap-3">
			{COLORS.map((color, id) => {
				return (
					<Reanimated
						as={Pressable}
						onPress={() => setExpandedId(id)}
						key={color}
						className="h-32 rounded-lg duration-300"
						style={{
							backgroundColor: color,
							flexGrow: id === expandedId ? 3 : 1,
						}}
					/>
				);
			})}
		</View>
	);
}
