import React, { MouseEventHandler } from 'react';
import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interface";
import Tabs from './Tabs/Tab';


interface PokemonListProps{
    pokemon: ListPokemon;
    onClose: MouseEventHandler<HTMLSpanElement>;
}
const PokemonDetailsPopup = ({ pokemon, onClose }: PokemonListProps) =>  {

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>X</span>
                <div className='popup-content-top'>
                    <img src={pokemon.image} alt="pokeimg" className="popup-image" />
                    <div className='popup-content-info'>
                        <h2>#{pokemon.pokedexNumber && pokemon.pokedexNumber.toString().padStart(3, '0')}</h2>
                        <h1>{pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                    </div>
                </div>
                <div className='popup-info'>
                <Tabs />
                </div>
                
                
            </div>
        </div>
    );
}

export default PokemonDetailsPopup;