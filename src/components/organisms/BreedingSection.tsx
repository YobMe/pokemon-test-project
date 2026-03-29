import { View } from "react-native";
import { Card } from "react-native-paper";
import { AppText, BreedingItem } from "../../components";
import { useAppTheme } from "../../theme/ThemeProvider";

export const BreedingSection = ({ data }: any) => {
  const { theme } = useAppTheme();
  return (
    <Card
      style={{
        borderRadius: 20,
        backgroundColor: theme.colors.surface,
      }}
    >
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
