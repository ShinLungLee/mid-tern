
import style from './productitem.module.css';

export default function ProductItem({ product }) {

   return (
      <div className={style.item}>
         <a href="/">
            <img
               style={{ width: '100%' }}
               src={product.image}
               alt={product.name} />
         </a>
         <div className={style.info}>
            <h6 className={style.category}>
               {product.category}
            </h6>
            <h2 className={style.name}>
               {product.name}
            </h2>
            <span className={style.textGray}>
               NTD {product.price}.00
            </span>
            
         </div>
      </div>
   );
}
