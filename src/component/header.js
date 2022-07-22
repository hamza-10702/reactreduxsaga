import { useSelector } from "react-redux";

const Header = () => {
  const reducerData = useSelector((state) => state.cartData);
  console.log(reducerData.length)
  return (
    <div className="header">
      <div className="cart-div">
        <span>{reducerData.length}</span>
        {/* <span>{result.length}</span> */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
