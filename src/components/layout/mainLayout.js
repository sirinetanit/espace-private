import React from "react";
import Footer from "../footer/footer";

export default function MainLayout(props) {
  return (
    <div className="main">
      {props.children}
      <Footer />
    </div>
  );
}
