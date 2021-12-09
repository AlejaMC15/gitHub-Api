import Logo from '../../img/logo.png'
import './styles.css'

const Header = () => {

  return (
    <>
      <header>
        <img src={Logo} alt="logo" />
        <span>Github Api</span>
      </header>
    </>
  );
};

export default Header;
