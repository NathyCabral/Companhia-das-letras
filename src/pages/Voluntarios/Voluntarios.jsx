import Header from "../../components/Header/Header";
import image from "../../assets/2.png";
import "./voluntarios.css";

function Voluntarios() {
  return (
    <>
      <Header
        image={image}
        description="ilustracao Companhia das letras"
      ></Header>

      <div className="formulario">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbFQRmmyULiwfqsrS06rmbabMeDzziN1CXHsuayLwe5VS6LQ/viewform?embedded=true"
          width="100%"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Carregando…
        </iframe>
      </div>
    </>
  );
}

export default Voluntarios;
