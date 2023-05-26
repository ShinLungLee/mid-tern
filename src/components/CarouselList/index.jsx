import { Carousel } from "antd";
import styles from './carousellist.module.css'
import ProductItem from '../ProductItem';

export default function CarouselList({products}){
  const contentStyle = {height: '160px',color: '#fff',lineHeight: '160px',textAlign: 'center',background: '#364d79',};
    return(
      <div>
        <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
        </Carousel>
      </div>  
    );
}