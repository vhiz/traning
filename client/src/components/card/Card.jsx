import { useState } from "react";
import "./card.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartReducer";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  return (
    <div className="card">
      <img src={`http://localhost:3000/img${item.img}`} alt="" />
      <h1>{item.title}</h1>
      <span>{item.price}</span>
      <p>{item.description}</p>
      <div className="quantity">
        <button
          type="button"
          onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={() => setQuantity((prev) => prev + 1)}>
          +
        </button>
      </div>
      <button onClick={()=>dispatch(
        addToCart({
          id: item.id,
          title: item.title,
          img: item.img,
          price: item.price,
          quantity: quantity,
        })
      )}>Add to Cart</button>
    </div>
  );
}
