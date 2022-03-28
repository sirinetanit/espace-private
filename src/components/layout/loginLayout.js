import React from "react";
import Btn from "../common/Btn";
import FixedImage from "../common/fixedImage";
import Title from "../common/title";
import LoginCardLayout from "./loginCardLayout";

export default function LoginLayout(props){
    return(
       <div className="main">
           
        <FixedImage image="/images/banner.jpg"/>
       
        

        {props.children}
        <div className=" text-left">

        <Title className="firstT" subtitle="Unnn espace client pour quoi faire ?" />
        <ul className=" text-gray-500 list-disc">
            <li>Suivre et gérer vos demandes de devis, vos voyages, brochures, listes Mariages, Packs, cadeau,vos achats de Chéques Cadeaux.</li>
            <li>Accéder à votre devis web personnalisé en ligne.</li>
            <li>Des servicesw dédiés avant, pendant et aprés votre voyage.</li>
            <li>Gérer vos données personnelles.</li>
            <li>Vos demandes facilitées avec les formulaires pré-remplis.</li>
        </ul>
      
        </div>
        
    
        </div>
    );
}