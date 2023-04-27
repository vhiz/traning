import { useContext, useState } from "react";
import "./navbar.scss";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../context/authContex";
import { useDispatch, useSelector } from "react-redux";
import { removerItems, resetCart } from "../../reducers/cartReducer";
export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
  };
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h1>Train</h1>
      <div className="button">
        <FaShoppingCart className="icons" onClick={() => setOpen(!open)} />
        <button onClick={handleLogOut}>Logout</button>
        {open && products.length !== 0 && (
          <div className="cart">
            {products.map((product) => (
              <>
                <div className="items">
                  <img src={`http://localhost:3000/img${product.img}`} alt="" />
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <p>{product.quantity}</p>
                  <span onClick={() => dispatch(removerItems(product.id))}>
                    x
                  </span>
                </div>
              </>
            ))}
            <span onClick={() => dispatch(resetCart())}>Reset</span>
          </div>
        )}
      </div>
    </div>
  );
}
