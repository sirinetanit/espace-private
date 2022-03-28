import React from "react";
import DemandeLayout from "../../../components/layout/demandeLayout";
import Card from "../../../components/common/Card";
import List from "../../../components/common/list";
import CardLayout from "../../../components/layout/cardLayout";
import AccordionLayout from "../../../components/layout/accordionLayout";
import TableLayout from "../../../components/layout/tableLayout";
import Table from "../../../components/common/table";
import WCardLayout from "../../../components/layout/wcardLayout";
import TableLine from "../../../components/common/table02";
import Btn from "../../../components/common/Btn";
import Title from "../../../components/common/title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import Link from "../../../components/common/link";
export default function MonVoyage3() {
  return (
    <div>
      <DemandeLayout>
        <Title
          title="Découverte des Chutes Victoria"
          subtitle="Mon voyage"
          className=" contain secondT p-6 "
        />

<div class="flex ml-24 my-16 ">
<div class="w-1/5">
    <ul class=" flex-column font-medium text-sm ">
        <li className="my-4 ">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-400 -ml-7 text-lg"/>
            <span className=" text-gray-400 ml-3"> Ma demande</span>
        </li>
        <li className="my-4 ">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-400 -ml-7 text-lg"/>
            <span className=" text-gray-400 ml-3"> Mon devis</span>
        </li><li className="my-4 ">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-400 -ml-7 text-lg"/>
            <span className=" text-gray-400 ml-3"> Réservation</span>
        </li>

        <li className=" my-4">
        <span className=" border-l-2 border-gray-900 -ml-4"></span>
         <a className=" ml-4"  href="/mon-voyage">Mon voyage</a>
         <ul class="">
             <li><a href="/mon-voyage">Mon carnet de voyage</a></li>
             <li ><a href="/mon-voyage-02">Mon Ange Gardien</a></li>
             <li className="underline"><a href="/mon-voyage-03">Mes documents</a></li>
             <li><a href="/mon-voyage">Ajouter des options</a></li>
         </ul>
        </li>
        <li className=" my-4"><span className=" text-gray-400 "> Je partage</span></li>
    </ul>
</div>

<div className=" w-3/5 ">



<h3 className=" font-serif font-semibold">Mes documents</h3>

<div className=" my-4">
<WCardLayout >
<div className="flex p-4">
<p className="text-sm font-semibold w-1/6 mr-9">Facture de solde</p>
<div className="text-sm font-semibold w-3/4 ">
<p className="text-gray-400">Ceci est le solde restant à payer pour votre voyage</p>
<p>A PAYER AVANT LE 23 JUIN 2020</p>
</div>
<Btn className="inactive px-10 py-3 text-xs " title="Payer"/>    
</div>
</WCardLayout>
</div>

<div className=" mb-3">
<WCardLayout>
<div className="flex p-4">
<div className="w-1/4"><p className="text-sm font-semibold w-1/5">Mon carnet de voyage</p></div>
<div className="text-sm font-semibold w-3/4 ">
<p className="text-gray-400 ">Ceci reprend toutes les informations relatives à votre voyage</p>
<p>A PAYER AVANT LE 23 JUIN 2020</p>
</div>
<Btn className="bg-gray-900 text-white px-8 py-3 text-xs " title="Télécharger"/>    
</div>
</WCardLayout>
</div>

<div className=" mb-3">
<WCardLayout >
<div className="flex p-4">
<p className="text-sm font-semibold w-1/5">  billet d'avion électronique</p>
<div className="text-sm font-semibold w-3/4 ">
<p className="text-gray-400">Billet d'avion électronique de tous les passagers</p>
</div>
<Btn className="bg-gray-900 text-white px-8 py-3 text-xs " title="Télécharger"/>    
</div>
</WCardLayout>
</div>

<div className=" mb-3">
<WCardLayout >
<div className="flex p-4">
<p className="text-sm font-semibold w-1/5">Facture proforma</p>
<div className="text-sm font-semibold w-3/4 ">
<p className="text-gray-400">Ceci est la facture d'accopmte de votre voyage</p>
</div>
<Btn className="bg-gray-900 text-white px-8 py-3 text-xs " title="Télécharger"/>    
</div>
</WCardLayout>
</div>

<div className=" mb-3">
<WCardLayout >
<div className="flex p-4">
<p className="text-sm font-semibold w-1/5">Assurance</p>
<div className="text-sm font-semibold w-3/4">
<p className="text-gray-400">Product name of the insurance product</p>
</div>
<Btn className="bg-gray-900 text-white px-8 py-3 text-xs " title="Télécharger"/>    
</div>
</WCardLayout>
</div>

<div className="mb-4">
<WCardLayout >
<div className="flex p-4">
<p className="text-sm font-semibold w-1/5">Condition générales</p>
<div className="text-sm font-semibold w-3/4 ">
<p className="text-gray-400"></p>
</div>
<Btn className="bg-gray-900 text-white px-8 py-3 text-xs " title="Télécharger"/>    
</div>
</WCardLayout>
</div>


</div>


</div>

      </DemandeLayout>
    </div>
  );
}
