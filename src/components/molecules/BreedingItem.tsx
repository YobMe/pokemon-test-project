import { View } from "react-native";
import { AppText } from "../../components";

export const BreedingItem = ({ label, data }: any) => {
  return (
    <View className="items-center">
      <AppText style={{ fontWeight: 600 }} className="text-gray-500 mb-2">
        {label}
      </AppText>

      <View className="flex-row bg-gray-200 p-2 rounded-xl w-40 justify-center border-2 border-gray-300 ">
        <AppText style={{ fontWeight: 500 }} className="mr-2">
          {data.imperial}
        </AppText>
        <AppText style={{ fontWeight: 500 }}>{data.metric}</AppText>
      </View>
    </View>
  );
};
