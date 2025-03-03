import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { ListContext } from "./context/listContext";
import "./App.css";
import ListaDeMateriais from "./img/lista.svg";

function App() {
  const { listCount, addCount } = useContext(ListContext);
  return (
    <section className="app">
      <Link className="title" to={"/"}>
        <h1>ConstruCalc</h1>
      </Link>

      <Outlet />

      <nav>
        <Link className="materials" to={"/lista"}>
          <img src={ListaDeMateriais} alt="" />
          <p className="cart-num">{listCount}</p>
        </Link>
      </nav>
    </section>
  );
}

export default App;
