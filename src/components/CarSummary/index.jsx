import { useState } from "react";
import { Badge, theme } from "antd";
import { CarIcon } from "./Icons.jsx";
import styles from "./carsummary.module.css"

export default function CarSummary() {
  const { token: { colorTextBase }} = theme.useToken();
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav onClick={toggleModal} className={styles.carSummary} >
      <Badge count={0} color="#6366F2" style={{color: 'white'}}>
        <CarIcon size={32} color={colorTextBase} />
      </Badge>
      <p className={styles.carText}> 購物車 </p>
    </nav>
  );
}