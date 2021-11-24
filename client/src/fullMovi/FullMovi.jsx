import React, { useState, useEffect} from 'react';
import "./fullMovi.scss";
import vidOne from "./videos/vidOne.mp4"
import {ArrowBackOutlined} from "@material-ui/icons"

function FullMovi() {
    const [shw, setShw] =useState(false);
    const [mv, setMv] =useState(false);

//    useEffect(() => {
//        setShw(true);
//        setTimeout(() => {
//            setShw(false);
//        }, 1500);
//    }, [mv])
    return (
        <div className="fullMovi">
        <div className="goBack" 
        // style={{display:shw?"flex":"none"}}
        >
         <ArrowBackOutlined/>
             Home
        </div>
            <video className="videoWatch" autoPlay controls progress onMouseMove={()=>{
                setMv(!mv);
            }}>
               <source src={vidOne} type="video/mp4"  />
            </video>
        </div>
        
    )
}

export default FullMovi
