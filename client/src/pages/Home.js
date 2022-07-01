import React from "react";

import NavBar from "../componets/navBar"
import Footer from "../componets/footer"
import SectionComp from "../componets/section"

export default function Home() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Home</h2>
        <NavBar/>
        <SectionComp/>


        <Footer/>

        

      </main>
    );
  }