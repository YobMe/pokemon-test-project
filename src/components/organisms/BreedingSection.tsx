import { View } from "react-native";
import { Card } from "react-native-paper";
import { AppText, BreedingItem } from "../../components";

export const BreedingSection = ({ data }: any) => {
  return (
    <Card style={{ borderRadius: 20 }}>
      <Card.Content>
        <AppText style={{ fontWeight: 600 }} className="text-xl mb-3">
          Breeding
        </AppText>

        <View className="flex-row justify-between mt-4">
          <BreedingItem label="Height" data={data.height} />
          <BreedingItem label="Weight" data={data.weight} />
        </View>
      </Card.Content>
    </Card>
  );
};
