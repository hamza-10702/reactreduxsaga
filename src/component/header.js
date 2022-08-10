import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const reducerData = useSelector((state) => state.cartData);
  console.log(reducerData.length);
  return (
    <div className="header">
      <Link to="/cart">
        <div className="cart-div">
          <span>{reducerData.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
      <Link to="/">
        <div>
          <h3>Main Page</h3>
        </div>
      </Link>
    </div>
  );
};

export default Header;
