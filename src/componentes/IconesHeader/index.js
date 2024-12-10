import styled from "styled-components";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const iconeOpcoes = [perfil, sacola];

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

function IconesHeader() {
  return (
    <Icones>
      {iconeOpcoes.map((icone) => (
        <Icone>
          <img src={icone} />
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
