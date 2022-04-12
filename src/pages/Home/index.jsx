import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../services';
import { useEffect, useState} from 'react';
import './home.css'



function Home(){
    const [products, setProducts] = useState([]);
    const showProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
    };
    useEffect(() => {
        showProducts();
    }, []);
    return (
        <div>
        <Header/>
        <div>
            {
                products.map((product) => (
                    <ProductCard key={product.id} eachProduct={product} />
                ))
            }
        </div>  
        </div>
    );
}

export default Home;