import { View } from "react-native";
import { Card, Button } from "react-native-paper";
import { AppText, MoveChip } from "../../components";

export const MovesSection = ({ moves }: any) => {
  return (
    <Card style={{ borderRadius: 20, marginTop: 10 }}>
      <Card.Content>
        <View className="flex-row justify-between items-center mb-8">
          <AppText style={{ fontWeight: 600 }} className="text-xl">
            Moves
          </AppText>

          <Button mode="contained" buttonColor="black">
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
