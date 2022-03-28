import React from "react";
import MainNav from "../header/MainNav";

function Layout(props){
    return (
    <div>
              <MainNav/>
              <main className="main">
                  {props.children}
              </main>

    </div>
    );}

export default Layout;