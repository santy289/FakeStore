import './Header.css';
import { NavLink, useNavigate} from 'react-router-dom';
/* import Sidebar from '../SideBar/Sidebar'; */
import { 
  HOME_RUTE, 
  ABOUT_RUTE, 
  LOGIN_RUTE,
  CAR_ROUTE,
} from '../../routes/routes';

function Header() {
  const navigate = useNavigate();
  const id = localStorage.getItem('userId')
  
  function handleLogout (){
    localStorage.removeItem('userId');
    navigate('/');
    
  }
    return (
      <header className="Header_Container">
        {/* <Sidebar /> */}
          {id ?
          <ul className="Header_nav">
          <NavLink to={HOME_RUTE} className="Header_nav--item">Home</NavLink>
          <NavLink to={CAR_ROUTE} className="Header_nav--item">Profile</NavLink>
          <NavLink to={ABOUT_RUTE} className="Header_nav--item">About</NavLink>
          <button onClick={handleLogout} className="Header_nav--item">Log Out</button>
          </ul>
          :
          <ul className="Header_nav">
            <NavLink to={HOME_RUTE} className="Header_nav--item">Home</NavLink>
            <NavLink to={LOGIN_RUTE} className="Header_nav--item">Login</NavLink>
            <NavLink to={ABOUT_RUTE} className="Header_nav--item">About</NavLink>
            </ul>
          } 
      </header>
    );
  }

  export default Header;