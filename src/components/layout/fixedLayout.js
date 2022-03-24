import React from "react";
import '../../style/components/layout/fixedLayout.css';

export default function fixedLayout(props){
    return(
       <div className="flex justify-center items-center">
        {props.children}
       </div>
    );
}