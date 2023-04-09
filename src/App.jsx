import './App.css';
import Category from './pages/Category';
import Home from './pages/Home'
import Product from './pages/Product';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="products">
         <Route path="category/:categoryName" element={<Category />} />
         <Route path="id/:productId" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>  
  );
}
export default App;
