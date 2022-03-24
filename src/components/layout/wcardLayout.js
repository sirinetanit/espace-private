import React from "react";

function WCardLayout(props){
    return (
    <div class="mx-16 mt-8 bg-white border">

              <main className="main">
                  {props.children}
              </main>

    </div>
    );}

export default WCardLayout;