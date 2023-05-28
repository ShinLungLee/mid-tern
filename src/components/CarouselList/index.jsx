import { Carousel } from "antd";
import { Link } from 'react-router-dom';
import style from "./carousellist.module.css"
import { useEffect, useState } from "react";

export default function CarouselList({ products }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isCarouselEnabled = windowWidth >= 576;
  return (
    <>
    {isCarouselEnabled && (
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
                className={style.image}
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
    )}
    </>
  );
}