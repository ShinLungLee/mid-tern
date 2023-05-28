import { Carousel } from "antd";
import { Link } from 'react-router-dom';
import style from "./carousellist.module.css"

export default function CarouselList({ products }) {
  return (
    <Carousel autoplay>
      {products.map(product => (
        <div key={product.id}>
          <div className={style.item}>
            <Link to={`/products/id/${product.id}`}>
            <div className={style.info}>
              <img
                style={{
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  display: 'block',
                  margin: '0 auto',
                  width: 'auto',
                  height: '300px'
                }}
                src={product.image}
                alt={product.name}
              />
              
                <h2 className={style.name}>
                  {product.name}
                </h2>
             </div>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}