import React, { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  console.log(cartData);
  const amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  console.log(cartData.length);


  if (cartData.length) {
     console.log(true);
  } else {
    console.log(false);
  }

  console.log(amount);
  return (
    <div className="Cart">
      {cartData.map((item) => {
        return (
          <>
            <div>{item.productname}</div>
            <div>{item.price}</div>
            <br />
            <br />
            <br />
            <br />
          </>
        );
      })}
      {/* <h1>{amount}</h1> */}
    </div>
  );
};

export default Cart;
