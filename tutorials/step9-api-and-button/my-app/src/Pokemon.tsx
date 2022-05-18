import React, { useState } from 'react';
import CustomInput from './CustomInput';
import { runFetch } from './fetch-service';

const pokemonApiUrl = 'https://pokeapi.co/api/v2';

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

function Pokemon() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonAbilities, setPokemonAbilities] = useState<Ability[]>([]);
  const [error, setError] = useState(null);

  async function handleFetch(event: React.MouseEvent) {
    const options = {
      method: 'GET',
    };

    try {
      const result = await runFetch(`${pokemonApiUrl}/pokemon/${pokemonName}`, options);
      setPokemonAbilities(result.abilities);
    } catch (err: any) {
      setPokemonAbilities([]);
      setError(err);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPokemonName(event.target.value);
  }

  return (
    <div>
      <CustomInput value={pokemonName} onChange={handleChange}>
        Pokemon name:
      </CustomInput>
      <button type="button" onClick={handleFetch}>
        Fetch Pokemon abilities
      </button>
      {error && <span>Something went wrong...</span>}
      <ul>
        {pokemonAbilities.map((ability) => (
          <li key={ability.ability.name}>
            <a href={ability.ability.url}>{ability.ability.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;
