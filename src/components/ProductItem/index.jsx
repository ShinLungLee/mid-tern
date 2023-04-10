import { Link } from 'react-router-dom';
import style from "./productitem.module.css"

export default function ProductItem({ product }) {

   return (
      <div className={style.item}>
         
         <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%' }}
               src={product.image}
               alt={product.name} />
         </Link>
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
