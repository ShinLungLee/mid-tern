import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import products from "../json/products.json"
import { Carousel } from "antd"

function Home() {
  return (
    <div className="main-layout">
      <Header 
        logo="Concis" 
        />       
      <div className="layout-content container">
        <Carousel autoplay>
        <div>
        <h3 className="contentStyle">1</h3>
        </div>
        <div>
          <h3 className="contentStyle">2</h3>
        </div>
        <div>
          <h3 className="contentStyle">3</h3>
        </div>
        <div>
          <h3 className="contentStyle">4</h3>
        </div>
        </Carousel>
        <ProductList products={products} /></div>
      <Footer 
        customerservice="客服專線 02-0000-1234   服務時間 1000-1900 copyright ------------" />
    </div>
  );
}

export default Home;