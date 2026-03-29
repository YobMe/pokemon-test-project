import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { AppText, TypeBadge, StatBar } from "../../components";
import { useAppTheme } from "../../theme/ThemeProvider";

export const PokemonInfoCard = ({ pokemon }: any) => {
  const { theme } = useAppTheme();

  return (
    <Card
      style={{
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: theme.colors.surface,
      }}
    >
      <Card.Content>
        <View className="flex-row justify-between items-center justify-center">
          <View>
            <AppText>#{pokemon.id}</AppText>
            <AppText
              style={{ color: theme.colors.primary, fontWeight: "600" }}
              className="text-2xl"
            >
              {pokemon.name}
            </AppText>
          </View>

          <View className="flex-row">
            {pokemon.types.map((t: string) => (
              <TypeBadge key={t} type={t} />
            ))}
          </View>
        </View>

        <View className="flex-row mt-4 pb-4">
          <View className="flex-1 pr-2 justify-center">
            <StatBar label="HP" value={pokemon.stats.hp} color="#22C55E" />
            <StatBar
              label="Attack"
              value={pokemon.stats.attack}
              color="#EF4444"
            />
            <StatBar
              label="Defense"
              value={pokemon.stats.defense}
              color="#F59E0B"
            />
            <StatBar
              label="Speed"
              value={pokemon.stats.speed}
              color="#3B82F6"
            />
          </View>

          <View className="flex-3 w-2/3  items-center justify-center">
            <Image source={{ uri: pokemon.image }} className="w-60 h-60" />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};
