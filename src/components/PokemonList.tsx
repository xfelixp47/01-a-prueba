import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};

function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );

      const data = await response.json();

      const pokemonData = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemons(pokemonData);
    }

    fetchPokemons();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
        />
      ))}
    </div>
  );
}

export default PokemonList;