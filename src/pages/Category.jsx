import { useParams } from 'react-router-dom';
import _ from 'lodash';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";

import { useProductsByCategory } from '../react-query';

function Category() {
  const { categoryName } = useParams();
  const { data, isLoading } = useProductsByCategory(categoryName);
  const products = data || [];
  const title = _.startCase(categoryName);  

  return (
    <div className="main-layout ">
      <title>{title}</title>
      <Header 
        logo="Concis" 
        />       
      <div className="layout-content container"><ProductList products={products} isLoading={isLoading}/></div>
      <Footer 
        customerservice="客服專線 02-0000-1234   服務時間 1000-1900 copyright ------------" />
    </div>
  );
}

export default Category;