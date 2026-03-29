import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokemonListScreen, PokemonDetailScreen } from "../screens";
import { ScreenNames } from "../constants/screens";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.PokemonListScreen}
        component={PokemonListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.PokemonDetailScreen}
        component={PokemonDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
