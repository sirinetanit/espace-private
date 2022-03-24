import React from "react";
import '../../style/components/common/title.css';

export default function Title(props){
    return(
        <div className={props.className}>
        <div className="pb-3">
           <p className="mb-3">{props.title}</p>

           <h1>{props.subtitle}</h1>
        </div>
        </div>
    );
}
