import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
function Home() {
  return (
    <div >
      <Header 
        logo="Concis" 
        />
      <ProductList className="layout-content" />
      <Footer className="layout-footer" />
    </div>
  );
}

export default Home;