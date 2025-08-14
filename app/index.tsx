import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-700">
      <Image source={require("@/assets/images/react-logo.png")} style={{ width: 100, height: 100 }} />
      <Text className="text-white">Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/About"}>About</Link> 
    </View>
  );
}
