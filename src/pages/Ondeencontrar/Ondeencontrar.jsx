import Header from "../../components/Header/Header";
import image from "../../assets/3.png";
import lugares from "./dados";

import "./onde.css";

function Ondeencontrar() {
  return (
    <>
      <Header
        image={image}
        description="ilustracao Companhia das letras"
      ></Header>

      <div className="card-container">
        {lugares.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h4>{item.nome}</h4>
              <p>{item.telefone}</p>
              <p>{item.endereco}</p>
            </div>
          );
        })}
      </div>
      <div className="container-anima">
        <img
          className="companhia-anima-card"
          src="https://cdn.discordapp.com/attachments/723629983414616096/1002246531132440646/Companhia.gif"
        />
      </div>
    </>
  );
}
export default Ondeencontrar;
