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
export default function MonVoyage() {
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
         <a className=" ml-4"  href="#">Mon voyage</a>
         <ul class="">
             <li className="underline"><a href="/mon-voyage">Mon carnet de voyage</a></li>
             <li ><a href="/mon-voyage-02" >Mon Ange Gardien</a></li>
             <li ><a href="/mon-voyage-03">Mes documents</a></li>
             <li ><a href="/mon-voyage">Ajouter des options</a></li>
         </ul>
        </li>
        <li className=" my-4"><span className=" text-gray-400 "> Je partage</span></li>
    </ul>
</div>

<div className=" w-3/5 ">

<CardLayout>
  <AccordionLayout img="/images/banner.jpg" title1="JOUR 1" title2="Départ pour Livigstone" title3="Vol de Bruxelles Zaventem jusqu'à Livingstone" link1="Hotel Elephant CAMP">
<Card className="footer" subtitle="La population vit principalement à Lusaka, la capitale. Bien que le christianisme soit la religion officielle, de nombreux groupes ethniques et tribus pratiquent leurs propres croyances, effectuant des cérémonies à la fois spectaculaires et poussant à la réflexion.
Vous passerez sans doute la plupart de votre temps dans la brousse. Les occasions ne manquent pas de pratiquer des activités en plein air, la plupart sont d'ailleurs concentrées autour des trois fleuves du pays : le Kafue, le Luangwa et le Zambèze. La Zambie jouit d'un climat tropical, mais il peut faire froid dans les montagnes.
Les chutes sont aussi une attraction majeure en Zambie. Le trek pour y parvenir peut être difficile, mais gratifiant à l'arrivée. Les chutes Victoria sont les plus connues, mais les chutes de Kalambo, Kundalila, Lumangwe et Ngonye sont aussi des destinations prisées. Si votre vol vers la Zambie arrive de nuit et que vous aimeriez avoir une vue aérienne de la ville de jour, optez pour un tour en hélicoptère et survolez les chutes Victoria. Mais vous pouvez toujours partir pour les gorges des Bakoka, descendre en rappel, ou faire du kayak ou du rafting sur le Zambèze.
" />
      <Card className="footer font-semibold pt-5" title="The Elephant Camp" subtitle="La population vit principalement à Lusaka, la capitale. Bien que le christianisme soit la religion officielle, de nombreux groupes ethniques et tribus pratiquent leurs propres croyances, effectuant des cérémonies à la fois spectaculaires et poussant à la réflexion.
Vous passerez sans doute la plupart de votre temps dans la brousse. Les occasions ne manquent pas de pratiquer des activités en plein air, la plupart sont d'ailleurs concentrées autour des trois fleuves du pays : le Kafue, le Luangwa et le Zambèze. La Zambie jouit d'un climat tropical, mais il peut faire froid dans les montagnes.
Les chutes sont aussi une attraction majeure en Zambie. Le trek pour y parvenir peut être difficile, mais gratifiant à l'arrivée. Les chutes Victoria sont les plus connues, mais les chutes de Kalambo, Kundalila, Lumangwe et Ngonye sont aussi des destinations prisées. Si votre vol vers la Zambie arrive de nuit et que vous aimeriez avoir une vue aérienne de la ville de jour, optez pour un tour en hélicoptère et survolez les chutes Victoria. Mais vous pouvez toujours partir pour les gorges des Bakoka, descendre en rappel, ou faire du kayak ou du rafting sur le Zambèze.
" />
<img src="images/banner.jpg" className="w-1/2 h-3/5 ml-40"/>

<div className="my-4">
<WCardLayout >
<Card className="list mx-8 pt-5" title="Inclus dans la prestation"/>
<Link link="Elephant Camp"/>
<p className="mx-8 ">Pension complète</p>
<Link link="Thermes Bohoudama"/>
</WCardLayout>
</div>
<div className="mb-4">
<WCardLayout>
<Card className="list mx-8 pt-5" title="En option"/>
<ul className="mx-8 mb-2 list-disc">
  <li >Suplément pour une suite Junior</li>
  <li>Vol en classe business</li>
</ul>
</WCardLayout>
</div>
  </AccordionLayout>
</CardLayout>

<CardLayout>
  <AccordionLayout img="/images/banner.jpg" title1="JOUR 2" title2="Victoria Falls" title3="Visit des Chutes Victoria (premier partie)" link1="Hotel Beach Victoria Falls" link2="Thermes Bohoudama">
  The accordion uses the collapse functionality to make it fold and unfold.
  Accordions are useful when you need to organize lots of information in a vertically limited space. The headers let the user scan trough main subjects of the content, and choose which of the subjects they would like to examine in depth by clicking on it. It's very useful for FAQs and complex contact forms.
  </AccordionLayout>
</CardLayout>

<CardLayout>
  <AccordionLayout img="/images/banner.jpg" title1="JOUR 3" title2="Victoria Falls partie 2" title3="Le lendemain, vous aurez l'occasion de continuer votre visite des Chute Victoria" link1="Hotel Beach Victoria Falls" list1="Traversée des Chutes Victoria en Kyak (option à confirmer)">
  The accordion uses the collapse functionality to make it fold and unfold.

Accordions are useful when you need to organize lots of information in a vertically limited space. The headers let the user scan trough main subjects of the content, and choose which of the subjects they would like to examine in depth by clicking on it. It's very useful for FAQs and complex contact forms.
  
  </AccordionLayout>
</CardLayout>

</div>


</div>

      </DemandeLayout>
    </div>
  );
}
