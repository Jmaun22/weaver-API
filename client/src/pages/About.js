import React from "react";

import StudentList from "../componets/studentexample"
import { StudentProvider } from "../Contextex/StudentContext";

export default function About() {
    return (
      <main style={{ padding: "1rem 0" }}>

        <h2>About</h2>
        <StudentProvider>
        <StudentList />
      </StudentProvider>
      </main>
    );
  }