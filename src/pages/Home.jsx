import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import CarouselList from "../components/CarouselList"
import { useProducts} from "../react-query"

function Home() {
  const {data , isLoading } =useProducts();
  const products = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];
  return (
    <div className="main-layout">
      <Header 
        logo="Concis" 
        />       
      <div className="layout-content container">
        <CarouselList products={products}/>
        <ProductList products={products} isLoading={isLoading} /></div>
      <Footer 
        customerservice="客服專線 02-0000-1234   服務時間 1000-1900 copyright ------------" />
    </div>
  );
}

export default Home;