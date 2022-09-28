import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import Pagination from 'react-bootstrap/Pagination';


const Characters = () => {
    const name=useSelector(state=>state.userName)//lo traigo
    const [characterList,setCharacteList]=useState([]);
    const [nameInput,setNameInput]=useState("");
    const [locationList,setLocationList]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res=>setCharacteList(res.data.results))
        
        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res=>setLocationList(res.data.results))
    },[])
    
    const serchName=()=>{
        navigate(`/characters/${nameInput}`)
    }
    const searchLocations=(locationName)=>{
        axios.get(locationName)
        .then(res=>{setCharacteList(res.data.pokemon.map(pokemon=>(pokemon.pokemon.url)))
            console.log(res.data.pokemon.map(pokemon=>(pokemon.pokemon.url)))
        }
        
        )
        
    }
    const [page, setPage] = useState(1);
  const charactersPerPage = 15;
  const lastCharacterIndex = page * charactersPerPage; //15;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage; // 10
  const charactersPaginated = characterList.slice(
    firstCharacterIndex,
    lastCharacterIndex
  );
  const totalPages = Math.ceil(characterList.length / charactersPerPage);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }
    
    return (
        <div className='character'>
            <div className='leer'>
                <h1>Pokedex</h1>
            <h3>Welcom <b>{name}</b>, here you can find your favorite pokemon </h3>
            </div>
            
            <div className='character-input'>
                <form action="">
                    <label htmlFor="text"></label>
                <input type="text" value={nameInput} onChange={e=>setNameInput(e.target.value)} placeholder="nombre del pokemon"/>
                <button onClick={serchName}><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                
            </div>
            <div className='selector'>
                <select  onChange={e=>searchLocations(e.target.value)}>
                    <option value=""><h1>selecciona tipo</h1></option>
                    {
                        locationList.map(location=>(
                            <option key={location.url} value={location.url}>{location.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="cajaCharacterCard">
                {
                charactersPaginated.map(character=>(
                    <CharacterCard key={character.url?character.url:character} url={character.url?character.url:character}/>
                ))
            } <div className='empaginado'>
                <Pagination>
      
      <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1}/>
      
      {pagesNumbers.map((number) => (

      <Pagination.Item onClick={() => setPage(number)}>{number}</Pagination.Item>
      
 ))}
      
      
      <Pagination.Next onClick={() => setPage(page + 1)} disabled={page === totalPages}/>
      
    </Pagination>
            </div>
            
            </div>
            
               
           
        </div>
    );
};

export default Characters;