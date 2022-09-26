import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({url}) => {
    const [character,setCharacter]=useState({})
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(url)
        .then(res=>setCharacter(res.data))
    },[])
    
    return (
        <div onClick={()=>navigate(`/characters/${character.id}`)}>
             <h3>{character.name}</h3>
             <img src={character.sprites?.front_default} alt="" />
        </div>
    );
};

export default CharacterCard;