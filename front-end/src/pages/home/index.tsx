import Footer from "components/footer";
import NavBar from "components/navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Cadastro Eventos</h1>
          <p className="lead">
            Cadastre e liste os próximos eventos públicos da Savinis
          </p>
          <hr />
          <p>
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos por um back end construído com JavaScript/Typescript.
          </p>
          <Link className="btn btn-primary btn-lg" to="/cadastro">
            Cadastrar Evento
          </Link>
          <Link className="btn btn-secondary btn-event-list btn-lg" to="/listagem">
            Listar próximos eventos
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
