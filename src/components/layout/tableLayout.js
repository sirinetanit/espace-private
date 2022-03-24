import React from "react";

function TableLayout(props){
    return (

        <table class="border border-r-transparent border-b-transparent  text-center ">

              <main className="main">
                  {props.children}
              </main>

        </table>
     


    );}

export default TableLayout;