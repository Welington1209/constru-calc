import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <p>
          Facilite o planejamento da sua obra com o ConstruCalc, a ferramenta
          ideal para calcular a quantidade de materiais necessários para sua
          construção. De forma rápida e precisa, você obtém estimativas de
          cimento, tijolos, areia e muito mais, evitando desperdícios e
          otimizando custos. Simples, intuitivo e acessível diretamente pelo
          navegador!
        </p>
      </div>

      <div className="calc-control">
        <div className="container calc">
          <h3>Quantidade de tijolos</h3>

          <Link className="btn btn-calc" to={"/tijolos"}>
            Calcular
          </Link>
        </div>

        {/* <div className="container calc">
          <h3>Quantidade de tijolos</h3>

          <Link className="btn btn-calc" to={"/tijolos"}>
            Calcular
          </Link>
        </div>

        <div className="container calc">
          <h3>Quantidade de tijolos</h3>

          <Link className="btn btn-calc" to={"/tijolos"}>
            Calcular
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
