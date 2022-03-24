import React from "react";
import FixedImage from "../common/fixedImage";

export default function LoginLayout(props){
    return(
       <div className="main">
        <FixedImage image="/images/banner.jpg"/>
        {props.children}
        <div className=" text-center">
        <h1 className=" text-gray-900 ">Un espace client pour quoi faire ?</h1>
        <ul className=" text-gray-500 list-disc ">
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