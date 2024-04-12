import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interface";
import PokemonCard from "./PokemonCard";
import "./components.css";

interface PokemonListProps{
    pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
    return( 
        <>
        <div className="div-whole-left">
            {pokemons.length > 0
            ? pokemons.map((p) => {
                return( 
                    <PokemonCard key={p.name} pokemon={p} />
                );
            })
            : null}
        </div>
       
        </>
    );
};

export default PokemonList