import React from "react";
import DemandeLayout from "../../components/layout/demandeLayout";
import Card from "../../components/common/Card";
import List from "../../components/common/list";
import CardLayout from "../../components/layout/cardLayout";
import AccordionLayout from "../../components/layout/accordionLayout";
import TableLayout from "../../components/layout/tableLayout";
import Table from "../../components/common/table";
import WCardLayout from "../../components/layout/wcardLayout";
import Link from "../../components/common/link";
import TableLine from "../../components/common/table02";
import Btn from "../../components/common/Btn";
import Title from "../../components/common/title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
export default function MonDevis() {
  return (
    <div>
      <DemandeLayout>
        <div className=" relative ">
        <Title
          title="Découverte des Chutes Victoria"
          subtitle="Mon devis"
          className=" contain secondT p-6 "
        />
        <div className="flex absolute top-1/3 text-xs left-2/3">
        <Btn className=" bg-black px-5 py-3 text-white text-center mr-2" title="Réserver"/>
        <Btn className="inactive p-3  " title="Télécharger le devis"/>
        </div>
        </div>

<div class="flex ml-24 my-16">
<div class=" w-full mr-40">
    <ul class=" flex-column font-medium text-sm ">
        <li className="my-4 ">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-400 -ml-7 text-lg"/>
            <span className=" text-gray-400 ml-3"> Ma demande</span>
             </li>

        <li className=" my-4">
        <span className=" border-l-2 border-gray-900 -ml-4"></span>
         <a className=" ml-4"  href="#">Mon devis</a>
         <ul class="py-2 space-y-2">
             <li className="li">Plan de vol<br/>Voyageurs<br/>Programme<br/>Prix</li>
         </ul>
        </li>
        <li className=" my-4"><span className=" text-gray-400 "> Réservation</span></li>
        <li className=" my-4"><span className=" text-gray-400 "> Mon voyage</span></li>
        <li className=" my-4"><span className=" text-gray-400 "> Je partage</span></li>
    </ul>
</div>

<div>
    <div className=" w-3/4 ">
    <CardLayout>
    <Card className="list mb-7" title="Résumé du voyage" subtitle="Le Kenya, pays pionnier du safari, a tous les atouts d'une destination incontournable : des paysages variés et une faune très diversifiée, des réserves privées proposant des expériences originales, une population accueillante et des possibilités ed séjour balnéaire..." />
    <List className="black" leftList="Vol Brussels-livingstone A/R"/>
    <List className="black mb-4" leftList="Du 13 Juillet au 03 Aout 2020"/>
    <List className="black" leftList="2 adultes et 2 enfants"/><br/><br/>

    <List className="black mb-4" leftList="Montant total pour 4 personnes" rightList="12.800 $"/>
    <List className="black mb-8" leftList="Assurances " rightList="500 $"/>

    <List className="black " leftList="Total du voyage" rightList="13 300 $"/>
    </CardLayout>

    <h3 className="text-xl font-medium mb-4">Vos plans de vols</h3>

    <CardLayout>
    <AccordionLayout title="Qatar en classe économique">
    <TableLayout>
<Table td101="19" td102=" Mai" td103=" 2022"  td20101="16:30" td20102="Zurich" td20201="Qatar airways-SN 9695" td20203="Durèe : 5h50min" td20301="20:30" td20302="Doha"  td301="Classe" td302="Eco"  td401="Statut" td402="OK" />
<Table td101="20" td102=" Mai" td103=" 2022"  td20101="02:30" td20102="Doha" td20201="Qatar airways-SN 9695" td20203="Durèe : 5h15min" td20301="08:15" td20302="Mahe island seyshelles international airport"  td301="Classe" td302="Eco"  td401="Statut" td402="OK" />
<Table td101="30" td102=" Mai" td103=" 2022"  td20101="23:55" td20102="Mahe island seyshelles international airport" td20201="Qatar airways-SN 9695" td20203="Durèe : 5h50min" td20301="03:55" td20302="Doha"  td301="Classe" td302="Eco"  td401="Statut" td402="OK" />
<Table td101="31" td102=" Mai" td103=" 2022"  td20101="08:25" td20102="Doha" td20201="Qatar airways-SN 9005" td20203="Durèe : 5h50min" td20301="13:40" td20302="Doha"  td301="Classe" td302="Eco"  td401="Statut" td402="OK" />
    </TableLayout>
<div className=" text-gray-600 text-xs text-left font-semibold py-6">
<p><span className=" font-bold">+1j</span> = arrivée le lendemain du jour du départ</p><br/>
<p><span className=" font-bold">WL</span> = en liste d'attente</p><br/>
<p><span className=" font-bold">OK</span> = réservation confirmée à la date d'envoi du devis </p><br/>
<p><span className=" font-bold">PE</span> = sous réserve de confirmation</p><br/>
</div>
    </AccordionLayout>
    </CardLayout>

    <CardLayout>
    <AccordionLayout title="Quatar en classe équonomique"></AccordionLayout>
    </CardLayout>

    <h3 className="text-xl font-medium">Programme</h3><br/>

    <CardLayout>
    <AccordionLayout title="Départ pour la Zambie">
      <Card className="footer" subtitle="La population vit principalement à Lusaka, la capitale. Bien que le christianisme soit la religion officielle, de nombreux groupes ethniques et tribus pratiquent leurs propres croyances, effectuant des cérémonies à la fois spectaculaires et poussant à la réflexion.
Vous passerez sans doute la plupart de votre temps dans la brousse. Les occasions ne manquent pas de pratiquer des activités en plein air, la plupart sont d'ailleurs concentrées autour des trois fleuves du pays : le Kafue, le Luangwa et le Zambèze. La Zambie jouit d'un climat tropical, mais il peut faire froid dans les montagnes.
Les chutes sont aussi une attraction majeure en Zambie. Le trek pour y parvenir peut être difficile, mais gratifiant à l'arrivée. Les chutes Victoria sont les plus connues, mais les chutes de Kalambo, Kundalila, Lumangwe et Ngonye sont aussi des destinations prisées. Si votre vol vers la Zambie arrive de nuit et que vous aimeriez avoir une vue aérienne de la ville de jour, optez pour un tour en hélicoptère et survolez les chutes Victoria. Mais vous pouvez toujours partir pour les gorges des Bakoka, descendre en rappel, ou faire du kayak ou du rafting sur le Zambèze.
" />
      <Card className="footer pt-5" title="The Elephant Camp" subtitle="La population vit principalement à Lusaka, la capitale. Bien que le christianisme soit la religion officielle, de nombreux groupes ethniques et tribus pratiquent leurs propres croyances, effectuant des cérémonies à la fois spectaculaires et poussant à la réflexion.
Vous passerez sans doute la plupart de votre temps dans la brousse. Les occasions ne manquent pas de pratiquer des activités en plein air, la plupart sont d'ailleurs concentrées autour des trois fleuves du pays : le Kafue, le Luangwa et le Zambèze. La Zambie jouit d'un climat tropical, mais il peut faire froid dans les montagnes.
Les chutes sont aussi une attraction majeure en Zambie. Le trek pour y parvenir peut être difficile, mais gratifiant à l'arrivée. Les chutes Victoria sont les plus connues, mais les chutes de Kalambo, Kundalila, Lumangwe et Ngonye sont aussi des destinations prisées. Si votre vol vers la Zambie arrive de nuit et que vous aimeriez avoir une vue aérienne de la ville de jour, optez pour un tour en hélicoptère et survolez les chutes Victoria. Mais vous pouvez toujours partir pour les gorges des Bakoka, descendre en rappel, ou faire du kayak ou du rafting sur le Zambèze.
" />
<img src="images/banner.jpg" className="w-1/2 h-1/2 ml-40"/>
<WCardLayout>
<Card className="list mx-8 pt-5" title="Inclus dans la prestation"/>
<Link link="Elephant Camp"/>
<p className="mx-8 ">Pension complète</p>
<Link link="Thermes Bohoudama"/>
</WCardLayout>

<WCardLayout>
<Card className="list mx-8 pt-5" title="En option"/>
<ul className="mx-8 mb-2 list-disc">
  <li >Suplément pour une suite Junior</li>
  <li>Vol en classe business</li>
</ul>
</WCardLayout>
    </AccordionLayout>
    </CardLayout>

<CardLayout>
  <AccordionLayout title="tittittitit">
  <div className="flex ">
  <img src="images/banner.jpg" class=" h-16 px-8"/>
  <div>
  <Title className="leftT mb-0" title="Jour 2" subtitle="Victoria Falls "/>
  <Title className="leftT" title="Visite des Chutes Victoria (première partie) "/>
  <Link link="Hotel Beach Victoria"/>
  <Link link="Thermes Bohoudama"/>
  </div>
  </div>
  </AccordionLayout>
</CardLayout>

<CardLayout>
  <AccordionLayout title="tittittitit">
  <div className="flex ">
  <img src="images/banner.jpg" class=" h-16 px-8"/>
  <div>
  <Title className="leftT mb-0" title="Jour 3" subtitle="Victoria Falls partie 2 "/>
  <Title className="leftT" title="Le lendemain, vous aurez l'occasion de continuer votre visite des Chutes Victoria. "/>
  <Link link="Hotel Beach Victoria Falls"/>
  <ul className="mr-0 list-disc">
    <li>  <Link link="Thermes Bohoudama"/></li>
  </ul>
  </div>
  </div>
  </AccordionLayout>
</CardLayout>

<h3 className="text-xl font-medium">Prix</h3><br/>

    <TableLayout>
       <TableLine th101="Prix du voyage" th102="12.800$" th201="Assurance" th202="500$" th301="Total du voyage" th302="13 300$" />
    </TableLayout>

    <Card className="footer mt-6" title="Prestations en option (par personne)"/>
    <List className="grayy" leftList="Vol en premier classe" rightList="+ 430 $"/>
    <List className="grayy" leftList="Massage au Resort Khane" rightList="+ 1.200 $"/>
    <List className="grayy" leftList="Traversée des Chutes Victoria en Kayak" rightList="+ 215 $"/>
    <Btn className="bg-black px-6 py-3 text-white text-xs text-center m-9 ml-96" title="Réserver"/>


<CardLayout>
  <div className="flex">
  <Card className="footer" title="Votre ange gaardien" subtitle="Avec les produits de voyage, obtenez de la qualité chez vous, pour le prix le plus bas. Achetez votre équipement d'extérieur bon marché. Trouvez un magasin à proximité ! Tout pour la maison. Plus de 6000 références. Nouveautés chaque semaine."/>
  <img className=" w-40 h-28" src="images/banner.jpg"/>
  </div>
</CardLayout>

<CardLayout>
  <div className="flex">
  <Card className="footer" title="CO2 NEUTRAL" subtitle="Avec les produits de voyage, obtenez de la qualité chez vous, pour le prix le plus bas. Achetez votre équipement d'extérieur bon marché. Trouvez un magasin à proximité ! Tout pour la maison. Plus de 6000 références. Nouveautés chaque semaine."/>
  <img className=" w-40 h-28" src="images/banner.jpg"/>
  </div>
</CardLayout>

<CardLayout>
  <AccordionLayout title="Inclus">
  </AccordionLayout>
</CardLayout>

<CardLayout>
  <AccordionLayout title="Non inclus">
<ul>
  <li>- Les taxes d'aéroport locales ou taxes gouvernementales qui ne peuvent etre incluses lors de l'émission des billets d'avion.</li>
  <li>- Les excursions optionnelles</li>
  <li>- Les repas non repis dans le détail journalier et les boissons.</li>
  <li>- Les pourboires éventuels</li>
  <li>- Les frais de visa</li>
  <li>- L'assirance assistance et accidents obligatoire.</li>
  <li>- L'assirance annulation facultative mais vivement conseillée.</li>
</ul>
  </AccordionLayout>
</CardLayout>

<div>
<Card className="footer mt-6" title="Accompte & solde"/>
<ul className=" list-disc text-gray-400 mx-10">
  <li>- Les taxes d'aéroport locales ou taxes gouvernementales qui ne peuvent etre incluses lors de l'émission des billets d'avion.</li>
  <li>- Les excursions optionnelles</li>
  <li>- Les repas non repis dans le détail journalier et les boissons.</li>
  <li>- Les pourboires éventuels</li>
  </ul>
</div>

</div>
</div>

</div>

      </DemandeLayout>
    </div>
  );
}
