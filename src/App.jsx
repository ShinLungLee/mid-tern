import './App.css';
import Category from './pages/Category';
import Home from './pages/Home'
import Product from './pages/Product';
import Login from './pages/login';
import Register from './pages/Register';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './redux/store';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

// import { feedProducts } from './api';
// feedProducts(); QQ

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route exact path="/:login" element={<Login />} />     
          <Route exact path="/signup" element={<Register />} />
            <Route path="products">
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="id/:productId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider> 
    </QueryClientProvider> 
  );
}
export default App;
