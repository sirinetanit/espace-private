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




export default function MaDemande(){
    return(
        <div>
          
        <DemandeLayout>
            <Title title="Découverte des Chutes Victoria" subtitle="Ma demande" className=" contain secondT p-6 " />
                
<div class="flex ml-24 my-16">
<div class=" w-1/4 mr-40">
    <ul class=" flex-column font-medium text-sm">
        <li className=" my-4">
        <span className=" border-l-2 border-gray-900 -ml-4"></span>
         <a className=" ml-4"  href="#">Ma demande</a>
        </li>
        <li className=" my-4"><span className=" text-gray-400 "> Mon devis</span></li>
        <li className=" my-4"><span className=" text-gray-400 "> Réservation</span></li>
        <li className=" my-4"><span className=" text-gray-400 "> Mon voyage</span></li>
        <li className=" my-4"><span className=" text-gray-400 "> Je partage</span></li>
    </ul>
</div>

<div>
    <div className=" w-4/6">
    <Card className="list" title="Chèr(e) Mr Utilisateur Anonyme" subtitle="Voici les informations que vous avez choisies de nous communiquer au sujet de votre projet de voyager. N'hésiter pas à les compléter le cas échéant car elles sont essentielles pour mieux vous connaitre et pour vous créer un voyage qui respecte au mieux vos souhaits." />
  
    <CardLayout>
    <Card className="pb-2" listTitle="Mon voyage" listLink="Modifier" />
    <List className="gray" leftList="Pays" rightList="Zambie"/>
    <List className="gray" leftList="Période" rightList="Janvier"/>
    <List className="gray" leftList="Durée" rightList="15 jours"/>
    <List className="gray" leftList="Précision" rightList="Nous sommes vegan.Merci d'en tenir compte pour les repas."/>
    </CardLayout>

    <CardLayout>
    <Card className="pb-2" listTitle="Les voyageurs" listLink="Modifier" />
    <List className="gray" leftList="Je voyage" rightList="En couple"/>
    <List className="gray" leftList="Nombre de personnes" rightList="2 adultes, 2 enfants"/>
    <List className="gray" leftList="Type de voyage souhaité" rightList="Sport et aventures Détente et Bien etre"/>
    <List className="gray" leftList="Budget envisagé par personne" rightList="10.000$"/>
    </CardLayout>

    <CardLayout>
    <Card className="pb-2" listTitle="Mes coordonnées" listLink="Modifier" />
    <List className="gray" leftList="Titre" rightList="Mr"/>
    <List className="gray" leftList="Nom" rightList="Anonyme"/>
    <List className="gray" leftList="Prénom" rightList="Utilisateur"/>
    <List className="gray" leftList="Adresse email" rightList="user@gmail.com"/>
    <List className="gray" leftList="Téléphone" rightList="12345678"/>
    <List className="gray" leftList="Pays de résidence" rightList="Belgique"/>
    <List className="gray" leftList="left" rightList="right"/>
    <List className="gray" leftList="Comment avez-vous connu notre Maison de voyage" rightList="Facebook"/>
    </CardLayout>

    <CardLayout>
    <Card className="pb-2" listTitle="Mon rendez-vous" listLink="Modifier" />
    <List className="gray" leftList="Comment me contacter" rightList="Téléphone"/>
    <List className="gray" leftList="Date du rendez-vous" rightList="12 Juin 2020"/>
    <List className="gray" leftList="Heure du rendez-vous" rightList="14:00"/>
    </CardLayout>
    </div>
</div>
</div>


</DemandeLayout>
        </div>
    );

}
/*
<CardLayout>
    <Accordion/>
    </CardLayout>
*/
/*
           
<div class="container flex items-start">
    <ul class=" flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4 tab-buttons" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li class=" flex-grow text-center " >
            <button class=" active hover:bg-white border-y-0 border-r-0 border-b-2 border-transparent 
             py-4 px-4 text-sm font-medium text-gray-500 hover:text-black 
             hover:border-l-black active:text-red tab-item" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="nav-item flex-grow text-center" role="presentation">
            <button class=" hover:bg-white bg-transparent
                            border-y-0 border-r-0 border-b-2 border-transparent

            hover:bg-transparent hover:shadow-none py-4 px-4 text-sm font-medium text-center text-gray-500 hover:text-black hover:border-l-black" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Dashboard</button>
        </li>
        
    </ul>

<div id="myTabContent">
    <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>

</div>

</div>
*/
/*
<div class="row p-5">
  <div class="col-md-2 mb-3">
    <ul class="nav nav-pills flex-column" id="experienceTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#snit" role="tab" aria-controls="home" aria-selected="true">Field 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#devs" role="tab" aria-controls="profile" aria-selected="false">Field 2</a>
      </li>
    </ul>
  </div>
 
  <div class="col-md-10">
    <div class="tab-content" id="experienceTabContent">

      <div class="tab-pane fade show active text-left text-light" id="snit" role="tabpanel" aria-labelledby="home-tab">
        <h3>Field 1</h3>
        <span class="date-range code-font">Other Details</span>
        <ul class="pt-2">
          <li>The cats are cute.</li>
          <li>The birds are singing.</li>
        </ul>
      </div>

      <div class="tab-pane fade text-left text-light" id="devs" role="tabpanel" aria-labelledby="profile-tab">
        <h3>Field 2</h3>
        <span class="date-range code-font">Other Details</span>
        <ul class="pt-2">
          <li>The volcano is eruting.</li>
          <li>Everything is on fire.</li>
        </ul>
      </div>
    </div>
</div>
</div>
*/
/*
 <div className="flex">
      <CardLayout>
        <List className="small font-semibold text-2xl "  leftList="BRU" rightList="FKT"/>
        <List className="small" leftList="Brussels" rightList="Frankfurt"/>
        <p className=" text-center">Kenya airways</p>
        <List className="small" leftList="Date" rightList="Flight"/>
        <List className="small" leftList="Jeudi 13 Juillet,14h00" rightList="LV3443"/>
      </CardLayout>
      <p>-------------</p>
      <CardLayout>
        <List className="small font-semibold text-2xl" leftList="FKT" rightList="LVG"/>
        <List className="small" leftList="Brussels" rightList="Livingstone"/>
        <p className=" text-center">Kenya airways</p>
        <List className="small" leftList="Date" rightList="Flight"/>
        <List className="small" leftList="Jeudi 13 Juillet,10h05" rightList="LV3442"/>
      </CardLayout>
    </div>
*/