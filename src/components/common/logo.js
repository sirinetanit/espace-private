import React from "react";

export default function Logo(props){
    return(
       <div>
         <a href="#" class="flex items-center">
      <img src={props.logo}  alt="Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.LogoTitle}</span>
         </a>
       </div>
    );
}