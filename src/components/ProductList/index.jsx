import { Row, Col } from "antd";
import ProductItem from '../ProductItem';

export default function ProductList({products}){
    return(
      <div className="container">
        <Row gutter={[32, 32]}>
            {products.map(product => (
        <Col 
          key={product.id} 
          sm={{ span: 12 }} 
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 16 }}
        >
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
    </div>
    );
}