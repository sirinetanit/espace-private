import React from "react";

export default function Link(props){
    return(
       <div>
             <div className="underline my-2 mx-8">
                <a href="#">{props.link}</a>
            </div>
       </div>
    );
}