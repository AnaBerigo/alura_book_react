import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import "./estilo.css";

const iconeOpcoes = [perfil, sacola];

function IconesHeader() {
  return (
    <ul className="icones">
      {iconeOpcoes.map((icone) => (
        <li className="icone">
          <img src={icone} />
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
