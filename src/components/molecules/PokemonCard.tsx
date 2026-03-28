import { Card } from "react-native-paper";
import { AppText } from "../atoms/AppText";

export const PokemonCard = ({ name, onPress }: any) => {
  return (
    <Card onPress={onPress} className="m-2">
      <Card.Content>
        <AppText>{name}</AppText>
      </Card.Content>
    </Card>
  );
};
