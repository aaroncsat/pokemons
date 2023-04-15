import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './AllPoke.css';


const AllPoke = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => setPokemons(res.data.results))
            .catch(err => console.log(err))

    }, [])


    return (
        <div className='allpoke-container'>

            <h1>Első 20 Pokémon</h1>

            <div className="allpoke-results">

                {

                    pokemons.map(poke => {

                        return (

                            <>
                                <h3>{poke.name}</h3>
                                <a href={poke.url}>{poke.url}</a>

                            </>
                        )

                    })

                }

            </div>


        </div>
    )
}

export default AllPoke