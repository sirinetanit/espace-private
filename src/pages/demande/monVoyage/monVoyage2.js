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
export default function MonVoyage2() {
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
             <li className="underline"><a href="/mon-voyage-02">Mon Ange Gardien</a></li>
             <li><a href="/mon-voyage-03">Mes documents</a></li>
             <li><a href="/mon-voyage">Ajouter des options</a></li>
         </ul>
        </li>
        <li className=" my-4"><span className=" text-gray-400 "> Je partage</span></li>
    </ul>
</div>

<div className=" w-3/5 ">

<CardLayout>
<Card className="list mb-7" title="Notre service (votre Ange Gardien)" subtitle="Le Kenya, pays pionnier du safari, a tous les atouts d'une destination incontournable : des paysages variés et une faune très diversifiée, des réserves privées proposant des expériences originales, une population accueillante et des possibilités ed séjour balnéaire...
                                                                                 Le Kenya, pays pionnier du safari, a tous les atouts d'une destination incontournable : des paysages variés et une faune très diversifiée, des réserves privées proposant des expériences originales, une population accueillante et des possibilités ed séjour balnéaire.
                                                                                 Le Kenya, pays pionnier du safari, a tous les atouts d'une destination incontournable : des paysages variés et une faune très diversifiée, des réserves privées proposant des expériences originales, une population accueillante et des possibilités ed séjour balnéaire." />

</CardLayout>

<h3 className=" mt-20 text-2xl font-serif">Ange Gardien Afrique du Sud</h3>

<div className="flex">
<img className=" w-40 h-28 mr-8 mt-8" src="images/banner.jpg"/>
<Card className="footer" subtitle="Avec les produits de voyage, obtenez de la qualité chez vous, pour le prix le plus bas. Achetez votre équipement d'extérieur bon marché. Trouvez un magasin à proximité ! Tout pour la maison. Plus de 6000 références. Nouveautés chaque semaine.
Avec les produits de voyage, obtenez de la qualité chez vous, pour le prix le plus bas. Achetez votre équipement d'extérieur bon marché. Trouvez un magasin à proximité ! Tout pour la maison. Plus de 6000 références. Nouveautés chaque semaine.
Avec les produits de voyage, obtenez de la qualité chez vous, pour le prix le plus bas. Achetez votre équipement d'extérieur bon marché."/>
</div>
<Btn className="bg-gray-900 text-white p-4 text-xs relative left-96 " title="Envoyer un message à Marine"/>    


</div>


</div>

      </DemandeLayout>
    </div>
  );
}
