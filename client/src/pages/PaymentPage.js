import React from "react";

import NavBar from "../componets/navBar"
import Footer from "../componets/footer"
import Card from "../componets/squarecard"


export default function Home() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Payment Page</h2>
        <NavBar/>
        <Card/>
       


        <Footer/>

        

      </main>
    );
  }