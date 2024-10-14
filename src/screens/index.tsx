import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

export function Teste() {
  return (
    <View className="flex-1 justify-center items-center">
      <Pressable onPress={() => console.log("TRABAIA")}>
        <Text className="text-2xl text-orange-500">GUILHERME NÃO </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
