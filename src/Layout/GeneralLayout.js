import React from "react";
import Header from "../components/Header";

function GeneralLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default GeneralLayout;
