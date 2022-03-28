import React from "react";
import Btn from "../common/Btn";

export default function SecondFooter(){
    return(
       <div>

<footer class=" bg-white md:px-16 md:py-8">
    <div class="flex">
        <ul class="flex items-center text-gray-400 text-sm font-medium w-11/12">
        <img  className="w-12 h-12 mr-4 rounded-full shadow-lg" src="images/banner.jpg"/>
        <span>Laura Vulfs</span>
        <span className=" border-r mx-2 text-transparent h-10 ">|</span>
        <span>+32 2 250 15 44</span>
        </ul>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
            <Btn className="disable" title="Envoyer un message à Laura"/>    
            </li>
        </ul>
    </div>
 
</footer>
      
       </div>
    );
}
