import './page404.css'
import scarecrow from '../../assets/scarecrow.svg'
import { Link } from 'react-router-dom';
import { HOME_RUTE } from '../../routes/routes';

function Page404(){
    return (
<div class="main-section">
    <div class="img-container">
        <h2>404 not found</h2>
        <img src={scarecrow} alt=""/>
    </div>
    <div class="text-container">
        <h1>I have bad news for you</h1>
        <p>The offer for this product was spired, please come back to home to find another products</p>
        <Link to={HOME_RUTE}><button>BACK TO HOMEPAGE</button></Link>
    </div>
</div>
    );
}

export default Page404;