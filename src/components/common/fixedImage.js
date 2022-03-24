import React from "react";
import '../../style/components/common/fixedImage.css';

export default function FixedImage(props){
    return(
       <div className="main-fixed">
           <img className="fixedImage drop-shadow-xl mx-16" src={props.image}/>
       </div>
    );
}