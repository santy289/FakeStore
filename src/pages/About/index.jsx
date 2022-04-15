import './about.css';
import Photo from '../../assets/Photo.jpg';
import Gmail from '../../assets/gmail.png';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Header from '../../components/Header';


function About (){
    return(
        <div>
            <Header />
        <div className="about">
            <h1 className="title">Fake Store</h1>
            <h2 className="title_name">Santiago Valencia Álvarez</h2>
            <img src={Photo} alt="Profile Img" className="photo"/>
            <label className="description_label" htmlFor="description">Description</label>
            <p className="description" name="description">
                Fake store is a Front-End proget created with React.js and Redux, this page use a 
                FakeStore Api to get random products and draw it on the screen, also.. this page has
                a countdown timer to acces to the link, after that you can't acces and the link is for 
                404 page
            </p>
            <h3 className="subtitle">Another tencnologies and libraries used</h3>
            <ul>
                <li>
                    Redux Thunk: For use Distach on async functions, and get all information 
                    on Redux Store
                </li>
                <li>
                    React-Router: For use the routing system
                </li>
                <li>
                    react-countdown-circle-timer: to use a beautilized countdown timer
                </li>
            </ul>
            <label htmlFor="gmail">Email:</label>
            <img src={Gmail} alt="Email" className="icon_image"/>
            <p className="email_text" name="gmail">santiago.valencia4@udea.edu.co</p>
            <div className="links_container">
            <label htmlFor="linkedin"/>
            <a href='https://www.linkedin.com/in/santiagovalenciaalvarez/'>
                <img src={LinkedIn} alt="Linkedin" className="icon_image"/>
            </a>
            <label htmlFor="github"/>
            <a href='https://github.com/santy289'>
                <img src={Github} alt="Github" className="icon_image"/>
            </a>
            </div>
        </div>
        </div>
    );
}

export default About;