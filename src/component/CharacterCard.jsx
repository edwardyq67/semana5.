import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({url}) => {
    const [character,setCharacter]=useState({})
    const [color,setColor]=useState("")
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(url)
        .then(res=>{setCharacter(res.data)
        setColor(res.data.types[0].type?.name)
        })
    },[])
    console.log(character)
    return (
        <div className="containar" >
            <div className={color}>
            <div  onClick={()=>navigate(`/characters/${character.id}`)}>
             <h2><b>{character.name}</b></h2>
             <div>
                <h3><b>type: </b>{color}</h3>
                
             </div>
             <img src={character.sprites?.other.home.front_default} height="150" width={150} alt="" />
        </div>
        </div>
        
        </div>
        
    );
};

export default CharacterCard;