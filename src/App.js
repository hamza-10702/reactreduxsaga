import "./App.css";
import Main from "./component/main";
import Header from "./component/header";
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./component/Cart";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element = {<Main />}/>
        <Route path="/cart" element = {<Cart />}/>
      </Routes>
      
    </div>
  );
}

export default App;
