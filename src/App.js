import './App.css';
import { useEffect, useReducer } from "react";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart";
import {cartReducer} from './reducer/cartReducer';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {products: [], cart: []});

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    dispatch({type:"ADD_PRODUCTS", payload: data.products});
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div style={{display:'flex'}}>
        <Products state={state} dispatch={dispatch} />
        <Cart state={state}  dispatch={dispatch}/>
    </div>
  );
}

export default App;
