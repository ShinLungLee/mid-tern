import { useState } from "react";
import { Row, Col ,Select } from "antd";
import AddToCart from "../AddToCart"
import styles from "./productdetail.module.css"
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
                    className={styles.image}
                    src={product.image}
                />
            </Col>
            <Col
                xs={{ span: 24 }}
                lg={{ span: 14 }}
            >
                <div className={styles.info} >
                    <h2 className={styles.category} >
                        {product.category}
                    </h2>
                    <h1 className={styles.name} >
                        {product.name}
                    </h1>
                    <p className={styles.description}>
                        {product.description}
                    </p>
                    <div className={styles.wrap}>
                        <p className={styles.price} >
                            NTD${product.price}.00
                        </p>
                        <p className={styles.status}>
                     貨態: {product.countInStock > 0 ? "有貨" : "缺貨"}
                  </p>
                  <div className={styles.qty}>
                     數量: {"   "}
                     <Select
                        defaultValue={qty}
                        key={qty}                          
                        className={styles.selectStyle}
                        onChange={val => setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                            <Option key={x + 1} value={x + 1}>{x + 1}
                            </Option>
                        ))}
                     </Select>
                    </div>
                    <p className={styles.qty}>
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