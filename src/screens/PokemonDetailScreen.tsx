import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { PokemonInfoCard, BreedingSection, MovesSection } from "../components";

const mockPokemon = {
  id: "001",
  name: "bulbasaur",
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  types: ["grass", "poison"],
  stats: {
    hp: 60,
    attack: 50,
    defense: 70,
    speed: 40,
  },
  breeding: {
    height: {
      imperial: `2'04"`,
      metric: "0.7 m",
    },
    weight: {
      imperial: "15 lbs",
      metric: "6.9 kg",
    },
  },
  moves: ["Tackle", "Vine Whip", "Razor Leaf", "Solar Beam"],
};

export const PokemonDetailScreen = ({ route }: any) => {
  const { pokemon } = route.params;
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-100">
      <Appbar.Header style={{ backgroundColor: "#3B82F6" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={mockPokemon.name} />
        <Image source={{ uri: mockPokemon.image }} className="w-10 h-10 mr-3" />
      </Appbar.Header>

      <ScrollView className="p-4">
        <PokemonInfoCard pokemon={mockPokemon} />

        <View className="h-3" />

        <BreedingSection data={mockPokemon.breeding} />

        <View className="h-3" />

        <MovesSection moves={mockPokemon.moves} />
      </ScrollView>
    </View>
  );
};
