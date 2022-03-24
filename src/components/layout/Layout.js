import React from "react";
import Footer from "../footer/footer";
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