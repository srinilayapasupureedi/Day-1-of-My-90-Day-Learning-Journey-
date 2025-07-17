import ItemsList from "./ItemsList"
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart=()=>{
  const cartItems=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());
  };
  return <div className="p-4 m-4 text-center">
    <h1 className="text-2xl font-bold">Your Cart</h1>
    <button className="text-lg font-semibold rounded-lg bg-black text-white m-2 p-2 " onClick={handleClearCart}>Clear Cart</button>
    <div className="w-6/12 m-auto">
      <ItemsList items={cartItems}/>
    </div>
  </div>
};
export default Cart;
