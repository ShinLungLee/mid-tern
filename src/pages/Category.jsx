import { useParams } from 'react-router-dom';
import _ from 'lodash';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Category() {
  const { categoryName } = useParams();
  const _products = products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
      );
    

  return (
    <div className="main-layout ">
      <Header 
        logo="Concis" 
        />       
      <div className="layout-content container"><ProductList products={_products}/></div>
      <Footer 
        customerservice="客服專線 02-0000-1234   服務時間 1000-1900 copyright ------------" />
    </div>
  );
}

export default Category;