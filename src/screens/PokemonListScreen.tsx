import React, { useRef, useState } from "react";
import { View, Animated, Dimensions } from "react-native";
import { SearchBar, PokemonCard } from "../components";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../constants/screens";
import { useAppTheme } from "../theme/ThemeProvider";
import { useGetCharactersQuery } from "../reduxToolkit/services/gameApi";
import { ActivityIndicator } from "react-native-paper";
import { IconButton } from "react-native-paper";

const HEADER_MAX_HEIGHT = Dimensions.get("window").height * 0.3;
const HEADER_MIN_HEIGHT = 140;

type item = {
  id: string;
  name: string;
  image: string;
  types: string[];
};

export const PokemonListScreen = () => {
  const navigation = useNavigation();
  const { isDark, toggleTheme } = useAppTheme();
  const [filteredData, setFilteredData] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const {
    data: characters,
    isLoading,
    isError,
    error,
  } = useGetCharactersQuery();

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

  const handleSearch = (value: string) => {
    console.log("Searching:", value);

    const filtered = characters?.data.filter((item: item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredData(filtered);
  };

  return (
    <View className={`flex-1 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Animated.View
        style={{ height: headerHeight }}
        className="bg-blue-500 px-4 pt-10 justify-end"
      >
        <IconButton
          icon={isDark ? "weather-night" : "white-balance-sunny"}
          iconColor="white"
          size={28}
          onPress={toggleTheme}
          style={{
            marginTop: 10,
            alignSelf: "flex-end",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />

        <Animated.Text
          style={{ opacity: titleOpacity }}
          className="text-white text-4xl font-bold mb-8 ml-4"
        >
          {`Who are you \n looking for?`}
        </Animated.Text>

        <SearchBar onSearch={handleSearch} className="mb-8 ml-4 mr-4" />
      </Animated.View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Animated.FlatList
          contentContainerStyle={{ padding: 8 }}
          data={filteredData?.length ? filteredData : characters?.data}
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
      )}
    </View>
  );
};
