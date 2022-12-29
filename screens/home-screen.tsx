import { useNavigation } from "@react-navigation/native";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
export default function HomeScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <Text>nice</Text>
      <View>
        <Image
          className='h-32 w-32'
          source={{
            uri: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
        />
        <View className='w-24'>
          <Button
            onPress={() => nav.navigate("About" as never)}
            title='about'
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
