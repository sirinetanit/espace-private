import React from "react";

function WCardLayout(props){
    return (
    <div class=" bg-white border">

              <main className="main">
                  {props.children}
              </main>

    </div>
    );}

export default WCardLayout;