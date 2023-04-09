import { Button } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtocart.module.css"

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };
  return (
    <Button type="primary" className={styles.btn} onClick={addToCart}>
      Add To Cart
    </Button>
  );
}