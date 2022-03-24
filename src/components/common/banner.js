import React from "react";
import '../../style/components/common/banner.css';
import Btn from "./Btn";

export default function Banner(props){
    return(
       <div className="main-banner">
           <img className="banner" src={props.image}/>
           <div className="banner-container ">
           <p class=" font-medium tracking-tight text-white font-mono text-left h-9 text-3xl leading-8">{props.title}</p>
           <p class=" text-base tracking-tight text-white font-sans text-left h-6 font-medium leading-6">{props.subtitle}</p>
             <Btn title="Consulter ma demande" className="active"/>
           </div>
       </div>
    );
}