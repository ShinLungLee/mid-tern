import { Modal, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import style from "./carmodal.module.css"
import { CarIcon } from "./Icons";
import { selectCartItems } from "../../redux/cartSlice";
const { Option } = Select;

export default function CarModal(isOpen, toggleModal) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleCancel = () => toggleModal(!isOpen);
  const getTotalPrice = () => {
    return (cartItems.length > 0)?
        cartItems.reduce((sum, item)=>sum + item.qty,0)
        : 0;
  }
 

  return (
    <Modal
      title="購物車"
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {cartItems.length === 0 ?(
        <div>購物車是空的</div>
      ) : (
          cartItems.map(item=>(
            <li key={item.id} className={style.item}> 
            </li>
          ))
      )}
      <div className={style.wrap}>
            總共:
            <div className={style.totalPrice}>${getTotalPrice()}</div>
      </div>
      <Button
        className={style.btn}
        type="primary"
      >
        <CarIcon size={32} color={"#000000"} />
        <span style={{marginLeft: 10}}>結帳</span>
      </Button>
    </Modal>
  );
}