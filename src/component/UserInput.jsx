import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { changeName } from '../store/slice/userName.slice';

const UserInput = () => {
   const[userName,setUserName]=useState("");
   const navigate=useNavigate()//navegar
   const dispatch=useDispatch();//slice....userName.slice.jsx
   const dispatchUserName=()=>{
    dispatch(changeName(userName))//slice....userName.slice.jsx
    navigate("/characters");//navegar
   }
    
        return (
        <div className='portada'> 
           
           <h1>USUARIO</h1>
           <form action="form"> 
           <label htmlFor="text"></label>
           <input  type="text" value={userName} onChange={e=>setUserName(e.target.value)} placeholder="nombre"/>
           <button onClick={dispatchUserName}><i class="fa-solid fa-user"></i></button>
           </form>
           
        </div>
    );
};

export default UserInput;