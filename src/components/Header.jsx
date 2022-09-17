import '../App.css';
import SearchAdd from './SearchAdd';
import logo from '../img/logo.svg'

function Header() {
  return (
    <>
      <div className="Header">
        <img src={logo} alt="Logotipo Album Sport" />
      </div>
      
      <SearchAdd />
    </>
  );
}

export default Header;
