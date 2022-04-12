import './productCard.css'

function ProductCard(props) {
    const {
      id,title,price,category, description,image
    } = props.eachProduct;
    return (
      <div className="ProductCard" key={id}>
        <div className="ProductCard_containerImageService">
          <img className="ProductCard_containerImageService--image" src={image} alt={title} />
        </div>
        <div className="ProductCard_infoServiceList">
          <div className="ProductCard_serviceTitle">
            <h2 className="card_tittle">{title}</h2>
            <p className="card_info">{description}</p>
          </div>
          <div className="ProductCard_infoServiceList--pricing">
            <h2 className="card_tittle">Precio:</h2>
            <p className="card_info">{price}</p>
            <h2 className="card_tittle">Tipo de cobro:</h2>
            <p className="card_info">{category}</p>
          </div>
        </div>
      </div>
    );
  }
  export default ProductCard;