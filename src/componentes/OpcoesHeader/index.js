import styled from "styled-components";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.ul`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;

function OpcoesHeader() {
  return (
    <>
      <Opcoes>
        {textoOpcoes.map((texto) => (
          <Opcao>
            <p>{texto}</p>
          </Opcao>
        ))}
      </Opcoes>
    </>
  );
}

export default OpcoesHeader;
