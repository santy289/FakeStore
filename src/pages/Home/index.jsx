import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../services';
import { useEffect, useState} from 'react';
import './home.css'

function Home(){
    const [products, setProducts] = useState([]);
    const showProducts = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };
    useEffect(() => {
        showProducts();
    }, []);
    return (
        <section className="main">
            <header className="main_header">
                 <Header/>
            </header>
            <div className="main_products">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} eachProduct={product} />
                    ))
                }
            </div>  
        </section>
    );
}

export default Home;