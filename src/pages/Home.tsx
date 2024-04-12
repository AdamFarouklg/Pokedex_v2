import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemonHook";

const Home =() => {
    const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();


    return (
        <div>
        <div id="top"></div>
        <nav id="navbar">
          <h1>Pokedex</h1>           
        </nav>
            <PokemonList pokemons={pokemons}></PokemonList>
            {hasMorePokemon ? (
                    <button onClick={fetchNextPage}>
                        More
                    </button>
                ) : null}
        </div>
    );
};
export default Home;