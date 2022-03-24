import React from "react";

function CardLayout(props){
    return (
    <div class=" mb-4 p-8 bg-gray-100 " id="demande" role="tabpanel" aria-labelledby="demande-tab">

              <main className="main">
                  {props.children}
              </main>

    </div>
    );}

export default CardLayout;