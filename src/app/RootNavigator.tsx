import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokemonList, PokemonDetail } from "../screens";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
}
