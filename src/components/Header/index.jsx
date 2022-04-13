import './Header.css';
import { NavLink } from 'react-router-dom';
/* import Sidebar from '../SideBar/Sidebar'; */
import { 
  HOME_RUTE, 
  PRODUCT_DETAIL_RUTE, 
  ABOUT_RUTE, 
} from '../../routes/routes';

function Header() {
    return (
      <header className="Header_Container">
        {/* <Sidebar /> */}
        <ul className="Header_nav">
          <NavLink to={HOME_RUTE} className="Header_nav--item">Home</NavLink>
          <NavLink to={PRODUCT_DETAIL_RUTE} className="Header_nav--item">Comprar</NavLink>
          <NavLink to={ABOUT_RUTE} className="Header_nav--item">About</NavLink>
        </ul>
      </header>
    );
  }

  export default Header;