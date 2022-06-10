import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../services';
import { useEffect, useState} from 'react';
import Loading from "../../components/Loading";
import './home.css'

function Home(){

const [load, setLoad] = useState(true),
      [products, setProducts] = useState([]),
      [showingProducts, setShowingProducts] = useState(products);

useEffect(() => {
    setTimeout(() => {
        setLoad(false)
    }, 700)
    }, [])
    
    const showProducts = async () => {
        const data = await getAllProducts();
        setProducts(data)
        setShowingProducts(data)
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
                <input type="text" placeholder="Search for a product" onChange={({target})=>setShowingProducts(filterProducts(target.value))}
                />
                <button
                style={{width:20,height:20, backgroundColor:'tomato', border:'none'}}
                onClick={()=>setShowingProducts(products)}>
                    <p style={{color:'#fff'}}>X</p>
                </button>
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