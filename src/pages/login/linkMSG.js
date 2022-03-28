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




export default function LinkLogin(){
    return(
        <div>
      <LoginLayout>
    
        <LoginCardLayout>
            <Title title="Un lien pour vous connecter vous a été envoyer sur votre adresse e-mail." className="text-ms text-gray-400 font-semibold text-center w-2/4 mr-auto ml-auto " />
            <Title subtitle="Cliquer sur ce lien pour accéder à votre espace privé" className="seconT font-semibold text-center -mt-8 mb-4" />
            <Btn className=" bg-black text-white text-center p-3 mt-4 w-3/4 ml-20 " title="RENVOYER L'E-MAIL"/>
            <button type="button" class=" absolute -top-5 -right-5 bg-black text-white rounded-2xl p-1.5 h-8 w-8" data-dismiss-target="#toast-default" aria-label="Close">
              <span class="sr-only">Close</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </LoginCardLayout>

      </LoginLayout>
        </div>
    );

}