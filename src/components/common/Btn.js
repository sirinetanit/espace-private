import React from "react";
import '../../style/components/common/Btn.css';

export default function Btn(props){
    return(
       <div>
           <button className={props.className}>{props.title}</button>   
       </div>
    );
}