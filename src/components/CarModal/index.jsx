import { Modal, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems,removeCartItems } from "../../redux/cartSlice";
import style from "./carmodal.module.css"
import { CarIcon } from "./Icons";
import { selectCartItems } from "../../redux/cartSlice";
const { Option } = Select;

export default function CarModal({isOpen, toggleModal}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleCancel = () => toggleModal(!isOpen);
  const getTotalPrice = () => {
    return (cartItems.length > 0)?
        cartItems.reduce((sum, item)=>sum + item.price*item.qty,0)
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
               <Link to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`}>
                  <div onClick={handleCancel}>
                    <img className={style.image} src={item.image} alt={item.name} />
                  </div>
                </Link>
                <div className={style.content}>
                  <div className={style.name}>{item.name}</div>
                  <div>
                  Qty:{"  "}
                  <Select 
                    defaultValue={item.qty}
                    className="select-style"
                    onChange={(qty)=>dispatch(addCartItems({
                      id: item.id,
                      name: item.name,
                      image: item.image,
                      price: item.price,
                      countInStock: item.countInStock,
                      qty,
                    }))}
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                            <Option key={x + 1} value={x + 1}>{x + 1}
                            </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div>
                     <div className={style.price}>
                        ${item.price * item.qty}
                     </div>
                     <div className={style.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                        x
                     </div>
                  </div>
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