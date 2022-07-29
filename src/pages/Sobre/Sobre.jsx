import Header from "../../components/Header/Header";
import image from "../../assets/1.png";
import "./sobre.css";

function Sobre() {
  return (
    <>
      <Header
        image={image}
        description="ilustracao Companhia das letras"
      ></Header>

      <div>
        <section className="container-principal">
          <h2 className="titulo-sobre">Conheça mais sobre o projeto!</h2>

          <div className="container-texto">
            <p>
              A Companhia das Letras se originou a partir da ideia de ofertar um
              ensino diferenciado de alfabetização para idosos. A ideia se
              concretizou por meio de pesquisas as quais mostram que um grande
              número de idosos gostariam de concluir seus estudos, porém, se
              sentem por vezes excluídos e desamparados, principalmente por
              terem um grau de dificuldade maior entre outros alunos que são
              mais jovens, não se sentem confortáveis e não conseguem acompanhar
              a forma e ritmo de ensino que são passados e acabam por não dar
              continuidade aos estudos.
            </p>
          </div>

          <div className="container-segundo-texto">
            <img
              className="icon-animado"
              src="https://cdn.discordapp.com/attachments/723629983414616096/1001953965841317988/Gif1.gif"
            />
            <p>
              Segundo censo do IBGE (Instituto Brasileiro de Geografia e
              Estatística), mais de 11 milhões de brasileiros são analfabetos.
              Desses, mais da metade são pessoas com 60 anos ou mais,
              correspondendo a uma média de seis milhões de idosos que não sabem
              ler e nem escrever. 17 de fev. de 2022.
            </p>
          </div>
          <div className="container-terceiro-texto">
            <p>
              Desta forma a Companhia das Letras trabalha na inclusão social e
              tem como objetivo receber voluntários que tenham vontade de mudar
              e ajudar na autoestima de nossos idosos, ensinando a ler e
              escrever. O projeto tem ideia de implementar e popularizar a
              alfabetização em ONGs e Casas de Culturas (as quais oferecerem
              várias oficinas para a população de forma gratuita).
            </p>
          </div>
          <div className="container-valores">
            <h3>Nossos valores</h3>
            <ul className="valores-ul">
              <li className="valores-ul">• Inclusão Social</li>
              <li className="valores-ul">• Inovação</li>
              <li className="valores-ul">
                • Ética, transparência e responsabilidade em nossas ações e
                relações.
              </li>
              <li className="valores-ul">• Resgatar e valorizar</li>
            </ul>

            <img className="icon-animado-2" src="https://cdn.discordapp.com/attachments/723629983414616096/1001953905225252984/anima.gif" />
          </div>

          <img className="companhia-anima" src="https://cdn.discordapp.com/attachments/723629983414616096/1002246531132440646/Companhia.gif" />
        
        </section>
      </div>
    </>
  );
}

export default Sobre;
