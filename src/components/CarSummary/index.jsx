import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import { CarIcon } from "./Icons.jsx";
import styles from "./carsummary.module.css"
import { selectCartItems } from "../../redux/cartSlice";

export default function CarSummary() {
  const { token: { colorTextBase }} = theme.useToken();
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0)?
        cartItems.reduce((sum, item)=>sum + item.qty,0)
        : 0;
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav onClick={toggleModal} className={styles.carSummary} >
      <Badge count={count} color="#6366F2" style={{color: 'white'}}>
        <CarIcon size={32} color={colorTextBase} />
      </Badge>
      <p className={styles.carText}> 購物車 </p>
    </nav>
  );
}