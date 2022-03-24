import React from "react";
import DemandeLayout from "../../components/layout/demandeLayout";
import Card  from "../../components/common/Card";
import List from "../../components/common/list";
import CardLayout from "../../components/layout/cardLayout";
import TableLayout from "../../components/layout/tableLayout";
import Table from "../../components/common/table";
import WCardLayout from "../../components/layout/wcardLayout";
import Link from "../../components/common/link";
import TableLine from "../../components/common/table02";
import Btn from "../../components/common/Btn";
import Title from "../../components/common/title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';




export default function Partage(){
    return(
        <div>
        <DemandeLayout>
            <Title title="Découverte des Chutes Victoria" subtitle="Je partage" className=" contain secondT p-6 " />
                
<div class="flex ml-24 my-16">
<div class=" w-1/4 mr-40">
    <ul class=" flex-column font-medium text-sm">
    <li className="my-4 ">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-400 -ml-7 text-lg"/>
            <span className=" text-gray-400 ml-3"> Ma demande</span>
             </li>
             <li className="my-4 ">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-400 -ml-7 text-lg"/>
            <span className=" text-gray-400 ml-3"> Mon devis</span>
             </li>
             <li className="my-4 ">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-400 -ml-7 text-lg"/>
            <span className=" text-gray-400 ml-3"> Réservation</span>
             </li>
             <li className="my-4 ">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-400 -ml-7 text-lg"/>
            <span className=" text-gray-400 ml-3"> Mon voyage</span>
             </li>
             <li className=" my-4">
        <span className=" border-l-2 border-gray-900 -ml-4"></span>
         <a className=" ml-4"  href="#">Je partage</a>
         <ul class="py-2 space-y-2">
             <li className=" underline">Questionnaire</li>
         </ul>
        </li>
        
    </ul>
</div>

<div>
    <div className=" w-4/6">
    <Card className="list" title="Questionnaire" subtitle="Voici les informations que vous avez choisies de nous communiquer au sujet de votre projet de voyager. N'hésiter pas à les compléter le cas échéant car elles sont essentielles pour mieux vous connaitre et pour vous créer un voyage qui respecte au mieux vos souhaits." />
    <Btn className=" bg-black px-5 py-3 text-white text-center text-sm mt-6" title="Compléter le formulaire"/>
   
    </div>
</div>
</div>


</DemandeLayout>
        </div>
    );

}