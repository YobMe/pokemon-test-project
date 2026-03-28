import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Title, Paragraph } from "react-native-paper";

export default function PokemonDetail({ route }: any) {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: pokemon.image }} />
        <Card.Content>
          <Title>{pokemon.name}</Title>
          <Paragraph>Type: {pokemon.type}</Paragraph>
          <Paragraph>HP: {pokemon.hp}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});
