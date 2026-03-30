import { View } from "react-native";
import { Card } from "react-native-paper";
import { AppText, BreedingItem } from "../../components";
import { useAppTheme } from "../../theme/ThemeProvider";

type BreedingSectionProps = {
  data: {
    height: {
      imperial: string;
      metric: string;
    };
    weight: {
      imperial: string;
      metric: string;
    };
  };
};

export const BreedingSection = ({ data }: BreedingSectionProps) => {
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
