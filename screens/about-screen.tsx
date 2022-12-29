import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function AboutScreen() {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>AboutScreen</Text>
      <Button title='Home' onPress={() => navigate("Home" as never)} />
    </View>
  );
}
