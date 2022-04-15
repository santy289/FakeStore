import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../services';
import { useEffect, useState} from 'react';
import Loading from "../../components/Loading";
import './home.css'

function Home(){

const [load, setLoad] = useState(true)

useEffect(() => {
    setTimeout(() => {
        setLoad(false)
    }, 700)
    }, [])
    const [products, setProducts] = useState([]);
    const showProducts = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };
    useEffect(() => {
        showProducts();
    }, []);
    return (
        <div>
        <header className="main_header">
                 <Header/>
            </header>
        <section className="main">
             {load ? (
        <Loading /> )
        :   (
        <div>
            <div className="main_products">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} eachProduct={product} />
                    ))
                }
            </div>
            </div>  
             )
            }
        </section>
        </div>
    );
}

export default Home;