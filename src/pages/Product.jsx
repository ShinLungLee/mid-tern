import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from '../components/ProductDetail';
import products from "../json/products.json";
function Product() {
    const { productId } = useParams();
    const product = products.find(
        (x) => x.id === productId
    );

    return (
        <div className="container main-layout">
            <Header
                logo="Concis"
            />

            <ProductDetail product={product} className="layout-content" />
            <Footer
                customerservice="客服專線 02-0000-1234   服務時間 1000-1900 copyright ------------" />
        </div>
    );
}

export default Product;
