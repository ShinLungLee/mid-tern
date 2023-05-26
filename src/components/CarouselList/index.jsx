import { Carousel } from "antd";
import styles from './carousellist.module.css'
import ProductItem from '../ProductItem';

export default function CarouselList({products}){
    return(
      <Carousel autoplay>
      <div>
      <h3 className={styles.content}>1</h3>
      </div>
      <div>
        <h3 className={styles.content}>2</h3>
      </div>
      <div>
        <h3 className={styles.content}>3</h3>
      </div>
      <div>
        <h3 className={styles.content}>4</h3>
      </div>
      </Carousel>  
    );
}