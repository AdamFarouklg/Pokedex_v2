import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interface";
import React, { useEffect, useState } from "react";
import PokemonDetailsPopup from "./PokemonCardInfo";

interface PokemonCardProps {
    pokemon: ListPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }


    return(
        <div className="pokeCard">
                <div onClick={togglePopup} className="mainCard">
                    <img src={pokemon.image} alt="pokeimg" className="card-image" />
                        <div className="card-details"style={{ backgroundColor: '#EB6C6C' }}>
                            <h1>{pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                            {/* <h2>#{pokeid && pokeid.toString().padStart(3, '0')}</h2> */}
                            <div className="type-container">
                                <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/433125835_1609502566483231_5453723761255723127_n.png?stp=cp0_dst-png&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ben5adPzM6MAb7H-cgv&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdV8dHP8V8QEGnssTeXEPMWu_dtXeAaKw6feE-cea0j6Cw&oe=6635E314"></img>
                                <div className="type-content">Grass</div>
                            </div>
                        </div> 
                        {isPopupOpen && <PokemonDetailsPopup pokemon={pokemon} onClose={togglePopup}
                                // pokeid={pokeid}
                                // pokeimg={pokeimg}
                                // pokename={pokename}
                                // poketype={poketype}
                                // pokestats={pokestats}
                                // pokeheight={pokeheight}
                                // pokeweight={pokeweight}
                                // pokeabilities={pokeabilities} 
                            />}     
                </div>
            </div>
    );
};

export default PokemonCard;