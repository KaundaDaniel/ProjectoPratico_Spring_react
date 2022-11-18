import logo from "../../assets/img/logo.svg";
import './style.css'
function Header(){
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logo" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por <a href="https://github.com/KaundaDaniel">@Kaúndda da Gama</a>
                </p>
            </div>
        </header>
    )
}
export default Header