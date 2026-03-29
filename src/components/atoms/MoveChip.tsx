import { View } from "react-native";
import { AppText } from "../../components";

export const MoveChip = ({ move }: { move: string }) => {
  return (
    <View className="bg-gray-200 px-3 py-2 rounded-full mr-2 mb-2">
      <AppText className="text-xs">{move}</AppText>
    </View>
  );
};
