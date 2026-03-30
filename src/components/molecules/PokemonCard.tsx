import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { useAppTheme } from "../../theme/ThemeProvider";

const typeColors: any = {
  grass: "bg-green-500",
  poison: "bg-purple-500",
  fire: "bg-red-500",
};

type item = {
  id: string;
  name: string;
  image: string;
  types: string[];
};

interface PokemonCardProps {
  item: item;
  onPress: (item: item) => void;
}

export const PokemonCard = ({ item, onPress }: PokemonCardProps) => {
  const { theme } = useAppTheme();
  const styles = useStyles(theme);

  return (
    <Card
      testID="pokemon-card"
      style={styles.card}
      className="flex-1 rounded-2xl p-3 "
      onPress={() => onPress(item)}
    >
      <Card.Content>
        <View className="flex-row justify-between">
          <Text
            style={{ color: theme.colors.text }}
            className="font-bold capitalize"
          >
            {item.name}
          </Text>
          <Text className="text-gray-400">#{item.id}</Text>
        </View>
        <View className="items-center">
          <Image
            source={{ uri: item.image }}
            className="w-40 h-40"
            resizeMode="contain"
            accessibilityLabel={`${item.name} image`}
          />
        </View>
        <View className="flex-row flex-wrap">
          {item.types.map((type: string) => (
            <View
              key={type}
              className={`px-2 py-1 rounded-full mr-2 mt-1 ${typeColors[type]}`}
            >
              <Text className="text-white text-xs capitalize">{type}</Text>
            </View>
          ))}
        </View>
      </Card.Content>
    </Card>
  );
};

const useStyles = (theme: any) =>
  StyleSheet.create({
    card: {
      shadowColor: "#4b7ee4ff",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,

      elevation: 0,

      backgroundColor: theme.colors.surface,
    },
  });
