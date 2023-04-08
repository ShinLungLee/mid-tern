
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
            <p className={style.description}>
               {product.description}
            </p>
            <div className={style.more}>
               <a href="/" className={style.link}>
                  See More ...
               </a>
               <span
                  className={style.textGray}>
                  USD {product.price}.00
               </span>
            </div>
         </div>
      </div>
   );
}
