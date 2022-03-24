import React from "react";
import Title from "../components/common/title";
import Banner from "../components/common/banner";
import Card from "../components/common/Card";
import MainLayout from "../components/layout/mainLayout";

export default function Home(props){
    return(
       <div>
        <MainLayout>

        <Title className="secondT" title="Votre voyage avec" subtitle="Continents Insolites "/>
        <Banner image='/images/banner.jpg' title='Découverte des Chutes Victotia' subtitle='Novembre 2020' />
        
        <Title className="secondT" title="Votre voyage avec" subtitle="Continents Insolites "/>
        <div class="container mr-24 ml-16 md:px-12">
        <div class=" flex flex-wrap ">
        <Card className="list md:w-1/2  lg:px-4 lg:w-1/4" title="Sur mesure" subtitle="Depuis 40 ans, nous créons des voyages sur mesure, faisant des envies de nos voyageurs le point de départ de notre travail."/>
        <Card className="list md:w-1/2  lg:px-4 lg:w-1/4" title="Insolites" subtitle="Votre voyage sur mesure s’articule autour d’expériences insolites, soigneusement sélectionnées par nos spécialistes."/>
        <Card className="list md:w-1/2  lg:px-4 lg:w-1/4" title="Services" subtitle="Votre Travel designer dédié est à l’écoute de toutes vos envies de voyage sur mesure; elles constituent le fil rouge de sa création."/>
        <Card className="list md:w-1/2  lg:px-4 lg:w-1/4" title="Responsable" subtitle="Nous souhaitons compenser intégralement les émissions de nos voyageurs et celles de nos trois maisons."/>     
        </div>
        </div>

        </MainLayout>
       </div>
    );
}


/*******************Responsive flex 3 cards (1/3)*************************/ 
/*
<div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>



    </div>
</div>
*/