export type Pokemon = {
  id: string;
  name: string;
  image: string;

  types: string[];

  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };

  breeding: {
    height: {
      imperial: string;
      metric: string;
    };
    weight: {
      imperial: string;
      metric: string;
    };
  };

  moves: string[];
};

export type PokemonListItem = {
  id: string;
  name: string;
  image: string;
};
