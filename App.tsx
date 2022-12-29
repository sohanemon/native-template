import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className='p-4'>
      <StatusBar style='auto' />
      <Text className='text-xl mt-10'>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}
