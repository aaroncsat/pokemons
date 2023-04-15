import React from 'react';
import { useState} from 'react';
import axios from 'axios';
import Poke from './Poke';
import styled from 'styled-components';


const Button = styled.button`

display: block;
cursor: pointer;
background: rgb(252, 85, 252);
color: #fff;
border: none;
outline: none;
border-radius: 7px;
padding: 7px 15px;
font-size: 1rem;
margin: 0 auto;

`;

const Input = styled.input`

padding: 6px 20px;
border: none;
outline: none;
border-radius: 5px;
width: 40%;
margin: 10px auto;
text-align: center;

`;

const SearchCointainer = styled.div`

width: 100%;
padding: 10px;

`

const SearchPoke = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);

    function matchPoke() {

        if (input != "") {

            axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
                .then(res => setResult([res.data]))
                .catch(err => console.log(err))
        }
    };


    return (

        <SearchCointainer>

            <h1>Pokémon kereső</h1>

            <Input type="text" placeholder="Írj be egy Pokémont" onChange={(change) =>
                setInput(change.target.value)

            } />

            <Button onClick={matchPoke}>Keresés</Button>

            {

                result.map(item => {

                    return <Poke

                        name={item.name}
                        image={item.sprites.front_default}
                        key={item.id}

                    />

                })

            }

        </SearchCointainer>

    )
}

export default SearchPoke