import React from "react";
import '../../style/components/common/card.css';


export default function Card(props){
    return(
      <div className={props.className}>
        
         <div className=" text-left">
    
           <h1 className="mb-2">{props.title}</h1>

           <p className="my-3" >{props.subtitle}</p>


        <ul class=" my-1">
            <li className=" mb-2">
                <div class="flex">
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">{props.listTitle}</p>
                    </div>
                    <div class=" inline-flex underline font-semibold text-gray-900 ml-32">
                        <a href="#">{props.listLink}</a>
                    </div>
                </div>
            </li>
        </ul>



        
        





           
      
    
         </div>
      </div>  
    );
}

/*
 <p className="mb-2 text-2xl font-medium tracking-tight text-black  font-serif text-left ">{props.title}</p>

           <p className="mb-3 font-sans font-normal	 text-gray-400 text-left ">{props.subtitle}</p>
      
*/