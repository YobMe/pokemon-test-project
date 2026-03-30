import { FlatList } from "react-native";
import { PokemonCard } from "../../components";
import { Pokemon } from "../../types/pokemon";

type PokemonListProps = {
  data: Pokemon;
  onPressItem: (item: any) => void;
};

export default function PokemonList({ data, onPressItem }: PokemonListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <PokemonCard item={item} onPress={() => onPressItem(item)} />
      )}
    />
  );
}
