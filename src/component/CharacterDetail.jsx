import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
    const {id}=useParams();
    const [character,setCharacter]=useState({});
    const [color,setColor]=useState("")
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>{setCharacter(res.data)
        setColor(res.data.types[0].type?.name)})
    },[])
    console.log(character)
    
    return (
        <div className="img-detail">
            <div className="dentro">
            <div className={color}>
                
            <img src={character.sprites?.other.home.front_default} alt="" />
            <div className='info-Detail'>
                <h1><b>{character.name}</b></h1>
                <hr />
                <h2><b>type: </b>{color}</h2>
            </div>
            
            </div>
            </div>
        </div>
    );
};

export default CharacterDetail;