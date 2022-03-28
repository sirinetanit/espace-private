import React from "react";

function LoginCardLayout(props){
    return (
    <div class=" p-8 bg-white border shadow-xl w-1/2 ml-auto mr-auto -mt-10 relative mb-20 " id="demande" role="tabpanel" aria-labelledby="demande-tab">

              <main className="main">
                  {props.children}
              </main>

    </div>
    );}

export default LoginCardLayout;