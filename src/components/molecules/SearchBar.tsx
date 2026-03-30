import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppTheme } from "../../theme/ThemeProvider";

type SearchBarProps = {
  className?: string;
};

export const SearchBar = ({ className }: SearchBarProps) => {
  const { theme, isDark } = useAppTheme();
  return (
    <View
      className={`flex-row items-center ${isDark ? "bg-gray-800" : "bg-white"}  rounded-full pl-4 pr-1 py-0.5 mb-4 ${className}`}
    >
      <Ionicons name="search" size={18} color="gray" />
      <TextInput
        placeholder="Eg. Pikachu"
        className="flex-1 ml-2 h-12"
        placeholderTextColor={"gray"}
      />
      <TouchableOpacity className="bg-black px-4 py-1 rounded-full h-12 w-16 items-center justify-center">
        <Text className="text-white font-bold">GO</Text>
      </TouchableOpacity>
    </View>
  );
};
