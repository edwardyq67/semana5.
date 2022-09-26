import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
    const {id}=useParams();
    const [character,setCharacter]=useState({});
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>setCharacter(res.data))
    },[])
    console.log(character)
    return (
        <div>
            CharacterDetail
            <h3>{character.name}</h3>
            <img src={character.sprites?.front_default} alt="" />
        </div>
    );
};

export default CharacterDetail;