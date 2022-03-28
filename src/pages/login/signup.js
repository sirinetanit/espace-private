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
import LoginLayout from "../../components/layout/loginLayout";
import LoginCardLayout from "../../components/layout/loginCardLayout";




export default function Signup(){
    return(
        <div>
      <LoginLayout>
    
        <LoginCardLayout>
            <Title subtitle="Se connecter" className="firstT" />
            <input type="email" id="email" className="bg-transparent border border-gray-300 text-gray-900 text-sm  focus:ring-gray-900 focus:border-gray-900 block p-3 w-3/4 placeholder:text-gray-300 focus:placeholder:text-gray-900 mr-auto ml-auto" placeholder="Entrez votre adresse email" required/>
            <Btn className=" bg-black text-white text-center p-3 mt-4 w-3/4 ml-20 " title="SUIVANT"/>
        </LoginCardLayout>

      </LoginLayout>
        </div>
    );

}