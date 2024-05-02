import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import './Display.css'


function Display() {
    
const [data,setData]=useState([]);

    const fetchData= async()=>{
        try {
            const response = await axios.get("http://localhost:5001/api/get");
            console.log(response.data);
            setData(response.data);
    
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    
  return (
    <div>
        
      {
        data.map((dataObj,index)=>{
            return(
                <>
            <p id='p1'>
                name: {dataObj.name}
            </p>
            <p>
               email:  {dataObj.email}
            </p>
            <p>
                password: {dataObj.password}
            </p>
            </>
            )
            
        })
      }
    </div>
  )
}

export default Display
