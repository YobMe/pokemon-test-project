import { View } from "react-native";
import { AppText } from "../../components";

const typeColors: any = {
  grass: "bg-green-500",
  poison: "bg-purple-500",
  fire: "bg-red-500",
};

type TypeBadgeProps = {
  type: string;
};

export const TypeBadge = ({ type }: TypeBadgeProps) => {
  return (
    <View
      className={`px-3 items-center justify-center rounded-lg mr-2 h-8 ${typeColors[type]}`}
    >
      <AppText className="text-white text-xs capitalize">{type}</AppText>
    </View>
  );
};
