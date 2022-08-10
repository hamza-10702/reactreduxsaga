import { addToCart, removeToCart, emptyCart } from "../redux/actions/action";

import { fetchAllProduct } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const check = useSelector((state) => state.cartData);
  console.log(check)
  const producData = useSelector((state) => state.getAllProduct);
  // console.log(
  //   producData,
    
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  return (
    // <div>
    //   <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    //   <button onClick={() => dispatch(removeToCart())}>Remove To Cart</button>
    //   <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
    // <button onClick={() => dispatch(getProduct())}>Get product</button>
    // </div>
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div
        className="product-container"
        style={{ background: "cyan", marginBottom: "20px" }}
      >
        {producData.map((item) => (
          <div className="product-item">
            <div>ID : {item.id} </div>
            <div>Name : {item.productname} </div>
            <div>PoductID : {item.productId} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
