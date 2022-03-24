import React from "react";
import Logo from "../common/logo";
import DropDownMenue from "../common/menu";

export default function MainNav(){
    return(
<div>
<nav class="bg-white px-2 sm:px-4 border-b-2 border-gray-100 mb-12">
  <div class="container flex flex-wrap justify-between items-center mx-auto my-4">

  <Logo logo="images/logo.png" />

  <DropDownMenue title="Utilisateur Anonyme" firstItem="Ma demande" secondItem="Se déconnecter"/>
  
  </div>
</nav>
</div>
    );
}