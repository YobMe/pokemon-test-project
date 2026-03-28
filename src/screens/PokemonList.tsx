import { View } from "react-native";
import { PokemonList } from "../components";

export default function PokemonListScreen() {
  const mockData = [{ name: "Eyob Adugna" }, { name: "Thomas Adugna" }];

  return (
    <View className="flex-1 p-4">
      <PokemonList data={mockData} onPressItem={() => {}} />
    </View>
  );
}
