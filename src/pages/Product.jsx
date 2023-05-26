import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from '../components/ProductDetail';
import products from "../json/products.json";
import { useProductById } from '../react-query';

function Product() {
    const { productId } = useParams();
    // const product = products.find(
    //     (x) => x.id === productId
    // );
    const { data, isLoading } = useProductById(productId);

   const product = data || {};

    return (
        <div className="main-layout">
            <Header
                logo="Concis"
            />
            <div className="layout-content container">
            <ProductDetail product={product} isLoading={isLoading}/></div>
            <Footer
                customerservice="客服專線 02-0000-1234   服務時間 1000-1900 copyright ------------" />
        </div>
    );
}

export default Product;
