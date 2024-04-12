import { useEffect, useState } from "react"
import { IndexedPokemon, ListPokemon, PokemonListRessponse } from "../interfaces/pokemon.interface"
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL} from "../constants"
import { httpClient } from "../api/httpsClient"

const usePokemons = () => {
    const[pokemons, setPokemons] = useState<ListPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>
    (POKEMON_API_POKEMON_URL)

    useEffect (() => {
        fetchPokemon()
    }, [])

    const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
        const pokedexNumber = parseInt(
            indexedPokemon.url
            .replace(`${POKEMON_API_POKEMON_URL}/`, "")
            .replace("/", ""))

        const listPokemon: ListPokemon = {
            name: indexedPokemon.name,
            url: indexedPokemon.url,
            image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png?raw=true`,
            pokedexNumber
        };

        return listPokemon;
    }

    const fetchPokemon = async () => {
        if (nextUrl) {
            const result = await httpClient.get<PokemonListRessponse>(nextUrl)
            if (result?.data?.results) {
                const listPokemons = result.data.results.map(p => indexedPokemonToListPokemon(p));

                setPokemons([... pokemons, ...listPokemons])
                setNextUrl(result.data.next)
            }
        }
    }

    return {
        pokemons,
        fetchNextPage: fetchPokemon,
        hasMorePokemon: !!nextUrl,
    // }
    // const fetchPokemon = async (nextUrl) => {
    //     if (nextUrl) {
    //         const result = await httpClient.get<PokemonListRessponse>(nextUrl);
    //         if (result?.data?.results) {
    //             const listPokemons = result.data.results.map(p => indexedPokemonToListPokemon(p));
    //             return {
    //                 pokemons: listPokemons,
    //                 nextUrl: result.data.next
    //             };
    //         }
    //     }
    //     return {
    //         pokemons: [],
    //         nextUrl: null
    //     };
    // }
    
    // const usePokemonData = () => {
    //     const [pokemons, setPokemons] = useState([]);
    //     const [nextUrl, setNextUrl] = useState(null);
    
    //     const loadMorePokemon = async () => {
    //         const { pokemons: newPokemons, nextUrl: newNextUrl } = await fetchPokemon(nextUrl);
    //         setPokemons(prevPokemons => [...prevPokemons, ...newPokemons]);
    //         setNextUrl(newNextUrl);
    //     };
    
    //     useEffect(() => {
    //         loadMorePokemon();
    //     }, []);
    
    //     useEffect(() => {
    //         const handleScroll = () => {
    //             if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
    //                 loadMorePokemon();
    //             }
    //         };
    
    //         window.addEventListener('scroll', handleScroll);
    //         return () => window.removeEventListener('scroll', handleScroll);
    //     }, [nextUrl]);
    
    //     return {
    //         pokemons,
    //         fetchNextPage: loadMorePokemon,
    //         hasMorePokemon: !!nextUrl
    //     };
    };
}
export default usePokemons