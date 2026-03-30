import React from "react";
import { View, Image, ScrollView } from "react-native";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { PokemonInfoCard, BreedingSection, MovesSection } from "../components";
import { useAppTheme } from "../theme/ThemeProvider";
import { useGetCharacterDetailsQuery } from "../reduxToolkit/services/gameApi";
import { Pokemon } from "../types/pokemon";

// const mockPokemon = {
//   id: "001",
//   name: "bulbasaur",
//   image:
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//   types: ["grass", "poison"],
//   stats: {
//     hp: 60,
//     attack: 50,
//     defense: 70,
//     speed: 40,
//   },
//   breeding: {
//     height: {
//       imperial: `2'04"`,
//       metric: "0.7 m",
//     },
//     weight: {
//       imperial: "15 lbs",
//       metric: "6.9 kg",
//     },
//   },
//   moves: ["Tackle", "Vine Whip", "Razor Leaf", "Solar Beam"],
// };

export const PokemonDetailScreen = ({
  route,
  pokemon,
}: {
  route: any;
  pokemon: Pokemon;
}) => {
  const { isDark } = useAppTheme();
  const navigation = useNavigation();

  const {
    data: characterDetails,
    isLoading,
    isError,
    error,
  } = useGetCharacterDetailsQuery("001");
  console.log(
    "🚀 ~ PokemonDetailScreen ~ characterDetails:",
    characterDetails?.data,
  );

  return (
    <View className={`flex-1 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Appbar.Header style={{ backgroundColor: "#3B82F6" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={pokemon?.name} />
        <Image source={{ uri: pokemon?.name }} className="w-40 h-40" />
      </Appbar.Header>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView className="p-4">
          <PokemonInfoCard pokemon={characterDetails?.data} />

          <View className="h-3" />

          <BreedingSection data={characterDetails?.data.breeding} />

          <View className="h-3" />

          <MovesSection moves={characterDetails?.data.moves} />
        </ScrollView>
      )}
    </View>
  );
};
