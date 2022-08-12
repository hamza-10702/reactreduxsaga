import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { searchAllProducts } from "../redux/actions/productAction";

const Header = () => {
  const reducerData = useSelector((state) => state.cartData);


  const dispatch = useDispatch();
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

      <div className='search-box'>
               <input type='text' onChange={(event)=>{dispatch(searchAllProducts(event.target.value))}}/>
            </div>
    </div>
  );
};

export default Header;
