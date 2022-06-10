import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../services';
import { useEffect, useState} from 'react';
import Loading from "../../components/Loading";
import './home.css'

function Home(){

const [load, setLoad] = useState(true),
      [lookingFor, setLookingFor] = useState(''),
      [products, setProducts] = useState([]),
      [showingProducts, setShowingProducts] = useState(products);

useEffect(() => {
    setTimeout(() => {
        setLoad(false)
    }, 700)
    }, [lookingFor])
    
    const showProducts = async () => {
        const data = await getAllProducts();
        setProducts(data)
    };
    useEffect(() => {
        showProducts();
        
    }, []);

     const filterProducts = (para) => {
        return products.filter(ele => {
            return ele.title.toLowerCase().indexOf(para.toLowerCase()) > -1;
        })
    }
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
            <div className="search_bar">
                <input type="text" placeholder="Search for a product" onChange={(text)=>setLookingFor(text)}
                onFocus={()=>setShowingProducts(filterProducts(lookingFor))}/>
            </div>
            <div className="main_products">
                {
                    showingProducts.map((product) => (
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