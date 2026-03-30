import { View } from "react-native";
import { AppText } from "../../components";
import { useAppTheme } from "../../theme/ThemeProvider";

type MoveChipProps = {
  move: string;
};

export const MoveChip = ({ move }: MoveChipProps) => {
  const { isDark } = useAppTheme();
  return (
    <View
      className={`px-4 py-3 rounded-full mr-2 mb-2 ${isDark ? "bg-gray-900" : "bg-gray-200"}`}
    >
      <AppText className="text-xs">{move}</AppText>
    </View>
  );
};
