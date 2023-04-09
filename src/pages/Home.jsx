import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import products from "../json/products.json"


function Home() {
  return (
    <div className="container main-layout">
      <Header 
        logo="Concis" 
        />       
      <ProductList products={products} className="layout-content" />
      <Footer 
        customerservice="客服專線 02-0000-1234   服務時間 1000-1900 copyright ------------" />
    </div>
  );
}

export default Home;