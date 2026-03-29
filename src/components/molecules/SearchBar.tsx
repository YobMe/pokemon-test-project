import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-white rounded-full px-3 py-2 mb-4">
      <Ionicons name="search" size={18} color="gray" />
      <TextInput placeholder="Eg. Pikachu" className="flex-1 ml-2" />
      <TouchableOpacity className="bg-black px-4 py-1 rounded-full">
        <Text className="text-white font-bold">GO</Text>
      </TouchableOpacity>
    </View>
  );
};
