import React from "react";
import FixedImage from "../common/fixedImage";
import DemandeFooter from "../footer/demandeFooter";
import SecondFooter from "../footer/secondFooter";

export default function DemandeLayout(props){
    return(
       <div className="main">
        <FixedImage image="/images/banner.jpg"/>
        {props.children}
        <SecondFooter/>
        <DemandeFooter/>
       </div>
    );
}