import { Link } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalState";
import 'bulma/css/bulma.min.css';



export default function App() {
  return (
    <GlobalProvider>  
      <h1>HeatMap</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link>
        <Link to="/heatmap">HeatMap</Link>
      </nav>
      </GlobalProvider>
  );
}


