import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Car from '../../components/Car/Car'
import "./ProductDetail.css";

function ProducDetails() {
  const [load, setLoad] = useState(true)
  const oneProducts = useSelector((state) => state.oneProduct)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 700)
  }, [])
  const {
    category,
    description,
    image,
    price,
    rating: { rate, count },
    title,
  } = oneProducts

  return (
    <div>
      <Header/>
    <div className="product-details">
      {load ? (
        <Loading /> 
      ) : 
      ( 
        <div className="product-details__container">
        <div className="details-card">
          
          <section className="card-top">
            <span className="card-top_title">{title}</span>
            <span>
              {" "}
              <strong>Category</strong>: {category}
            </span>
          </section>
          <img src={image} alt={title} />
          <p className="details-card__description">{description}</p>
          <section className="card-botton">
            <span className="card-botton__quantity">quantity: {count}</span>
            <span>
              {" "}
              <strong>Price</strong>: ${price}
            </span>
          </section>
          <p>
            <strong>Rate</strong>: {rate}
          </p>
        </div>
        <button onClick={()=>Car(oneProducts)}>
          Add to Car
        </button>
      </div>

      )}
    </div>
    </div>
  )
}

export default ProducDetails