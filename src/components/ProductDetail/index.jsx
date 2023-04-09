import { useState } from "react";
import { Row, Col ,Select } from "antd";
import AddToCart from "../AddToCart"
import style from "./productdetail.module.css"
const { Option } = Select;

function ProductDetail({ product }) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
    
    return (
        <Row gutter={[32, 32]}
            style={{ justifyContent: 'center' }}
        >
            <Col
                xs={{ span: 24 }}
                lg={{ span: 6 }}
            >
                <img
                    alt={product.name}
                    className={style.image}
                    src={product.image}
                />
            </Col>
            <Col
                xs={{ span: 24 }}
                lg={{ span: 14 }}
            >
                <div className={style.info} >
                    <h2 className={style.category} >
                        {product.category}
                    </h2>
                    <h1 className={style.name} >
                        {product.name}
                    </h1>
                    <p className={style.description}>
                        {product.description}
                    </p>
                    <div className={style.wrap}>
                        <p className={style.price} >
                            NTD${product.price}.00
                        </p>
                        <p className={style.status}>
                     貨態: {product.countInStock > 0 ? "有貨" : "缺貨"}
                  </p>
                  <div className={style.qty}>
                     數量: {"   "}
                     <Select
                        defaultValue={qty}
                        key={qty}                          
                        className={style.selectStyle}
                        onChange={val => setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                            <Option key={x + 1} value={x + 1}>{x + 1}
                            </Option>
                        ))}
                     </Select>
                    </div>
                    <p className={style.qty}>
                     總價: {product.price * qty}
                    </p>
                    <AddToCart product={product} qty={qty} />
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default ProductDetail;