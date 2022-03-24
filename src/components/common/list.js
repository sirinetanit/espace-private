import React from "react";
import "../../style/components/common/list.css";


export default function List(props){
    return(
      <div className={props.className}>

       <ul class=" my-1 ">
            <li >
                <div className={props.className}>
                <div class="flex">
                    <div className=" left"> <p>{props.leftList}</p></div>
                    <div className="right">{props.rightList}</div>
                </div>
                </div>
            </li>
            
        </ul>

</div>  
);
}