import { addToCart , removeToCart ,emptyCart} from "../redux/actions/action";

import { getProduct } from '../redux/actions/productAction'
import { useDispatch , useSelector } from "react-redux";

function Main() {
  const producData = useSelector((state)=>state.getProduct)
  console.log(producData,"ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp")
  const dispatch = useDispatch();
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeToCart())}>Remove To Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(getProduct())}>Get product</button>
    </div>
  );
}

export default Main;
