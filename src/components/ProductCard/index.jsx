import './productCard.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchOneProduct } from "../../store/actions"
import { PRODUCT_DETAIL_RUTE } from '../../routes/routes'

function ProductCard(props) {
  const {
    id,title,image
  } = props.eachProduct;
  const dispatch = useDispatch()
  const [details, setDetails] = useState(true)
  const [random, setRandom] = useState(Math.floor(Math.random() * (360 - 60 + 1))+60)
  
  
  useEffect(() => {
    setRandom(Math.floor(Math.random() * (360 - 60 + 1))+60);
  }, [])

  const handleOnComplete = () => {
    setDetails(false)
    setRandom(0)
  }
  const handleLinkCLick = async () => {
    dispatch(fetchOneProduct(id))
  }
 
  const formatRemainingTime = time => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  
    return `${minutes}:${seconds}`;
  };
  
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining time</div>
        <div className="value">{formatRemainingTime(remainingTime)}</div>
      </div>
    );
  };

  const timerProps = {
    isPlaying: true,
    size: 75,
    strokeWidth: 8
  };
    return (
      <div className="ProductCard">
        <div className="ProductCard_containerImageService">
          <img className="ProductCard_containerImageService--image" src={image} alt={title} />
        </div>
        <div className="ProductCard_infoServiceList">
          <div className="ProductCard_serviceTitle">
            <h2 className="card_tittle">{title}</h2>
          </div>
        </div>
          <div className="ProductCard_infoServiceList--pricing">
          <CountdownCircleTimer
          {...timerProps}
          isPlaying
          duration={random}
          colors={['#06f436', '#a5f406','#f0f406','#F7B801','#f46906','#A30000','#000000']}
          colorsTime={[150, 120, 90, 60, 30, 15, 0]}
          onComplete={handleOnComplete}
        >
          {renderTime}
        </CountdownCircleTimer>
            <Link
             className={details ? "active" : "deactive"}
             to={`${PRODUCT_DETAIL_RUTE}/${id}`}
             onClick={handleLinkCLick}
             ><button className="card_button">Go to details</button></Link>
          </div>
        
      </div>
    );
  }
  export default ProductCard;