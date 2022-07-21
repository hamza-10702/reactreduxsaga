import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { addToCart , removeToCart } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  const product = {
    itemId: 1,
    itemName: "Mobile",
    itemPrice: 23000,
  };
  return (
    <div className="App">
      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>
      <button
        onClick={() => dispatch(removeToCart())}
      >
        Remove To Cart
      </button>
    </div>
  );
}

export default App;
