import React, { useRef } from "react";
import { View, Animated, Dimensions } from "react-native";
import { SearchBar, PokemonCard } from "../components";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../constants/screens";

const HEADER_MAX_HEIGHT = Dimensions.get("window").height * 0.3;
const HEADER_MIN_HEIGHT = 120;

const mockData = [
  {
    id: "001",
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["grass", "poison"],
  },
  {
    id: "004",
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    types: ["fire"],
  },
  {
    id: "007",
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    types: ["water"],
  },
  {
    id: "010",
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    types: ["bug"],
  },
  {
    id: "013",
    name: "weedle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    types: ["bug", "poison"],
  },
  {
    id: "016",
    name: "pidgey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    types: ["normal", "flying"],
  },
  {
    id: "019",
    name: "rattata",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    types: ["normal"],
  },
  {
    id: "021",
    name: "spearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    types: ["normal", "flying"],
  },
  {
    id: "023",
    name: "ekans",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    types: ["poison"],
  },
  {
    id: "025",
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    types: ["electric"],
  },
  {
    id: "027",
    name: "sandshrew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    types: ["ground"],
  },
  {
    id: "029",
    name: "nidoran-f",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    types: ["poison"],
  },
  {
    id: "032",
    name: "nidoran-m",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    types: ["poison"],
  },
  {
    id: "035",
    name: "clefairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    types: ["fairy"],
  },
  {
    id: "037",
    name: "vulpix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    types: ["fire"],
  },
  {
    id: "039",
    name: "jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    types: ["normal", "fairy"],
  },
  {
    id: "041",
    name: "zubat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    types: ["poison", "flying"],
  },
  {
    id: "043",
    name: "oddish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    types: ["grass", "poison"],
  },
];

type item = {
  id: string;
  name: string;
  image: string;
  types: string[];
};

export const PokemonListScreen = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const handleCardPress = (item: item) => {
    (navigation as any).navigate(ScreenNames.PokemonDetailScreen, {
      pokemon: item,
    });
  };

  return (
    <View className="flex-1 bg-white">
      <Animated.View
        style={{ height: headerHeight }}
        className="bg-blue-500 px-4 pt-10 justify-end"
      >
        <Animated.Text
          style={{ opacity: titleOpacity }}
          className="text-white text-2xl font-bold mb-4"
        >
          Who are you looking for?
        </Animated.Text>

        <SearchBar />
      </Animated.View>

      <Animated.FlatList
        contentContainerStyle={{ padding: 8 }}
        data={mockData}
        numColumns={2}
        columnWrapperStyle={{ margin: 8, gap: 12 }}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonCard item={item} onPress={handleCardPress} />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
      />
    </View>
  );
};
