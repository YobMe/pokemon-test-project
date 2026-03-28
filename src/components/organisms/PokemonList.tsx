import { FlatList } from "react-native";
import { PokemonCard } from "../../components";

export default function PokemonList({ data, onPressItem }: any) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <PokemonCard name={item.name} onPress={() => onPressItem(item)} />
      )}
    />
  );
}
