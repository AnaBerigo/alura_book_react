import logo from "../../imagens/logo.svg";
import "./estilo.css";
function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo da Alura Books" className="logo-img"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
