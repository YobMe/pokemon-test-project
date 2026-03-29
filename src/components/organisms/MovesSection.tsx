import { View } from "react-native";
import { Card, Button } from "react-native-paper";
import { AppText, MoveChip } from "../../components";
import { useAppTheme } from "../../theme/ThemeProvider";

export const MovesSection = ({ moves }: any) => {
  const { theme } = useAppTheme();
  return (
    <Card
      style={{
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: theme.colors.surface,
      }}
    >
      <Card.Content>
        <View className="flex-row justify-between items-center mb-8">
          <AppText style={{ fontWeight: 600 }} className="text-xl">
            Moves
          </AppText>

          <Button mode="contained" buttonColor="black" textColor={"white"}>
            See All
          </Button>
        </View>

        <View className="flex-row flex-wrap">
          {moves.map((move: string) => (
            <MoveChip key={move} move={move} />
          ))}
        </View>
      </Card.Content>
    </Card>
  );
};
