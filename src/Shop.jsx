import { useReducer, useRef } from "react";
import "./shop.scss";
import { INITIAL_STATE, formReducer } from "./formReducer";
export default function Shop() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const tagRef = useRef();

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: "ADD_TAG", payload: tag });
    });
  };
  console.log(state);
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />
      <p>Categories :</p>
      <select name="category" id="" onChange={handleChange}>
        <option value="shoe">Shoe</option>
        <option value="cloth">Cloth</option>
        <option value="bag">Bag</option>
      </select>
      <textarea ref={tagRef} name="" id="" cols="30" rows="10"></textarea>
      <button onClick={handleTags}>Add tag</button>
      <div className="tags">
        {state.tags.map((tag) => (
          <small
            onClick={() => {
              dispatch({ type: "REMOVE_TAG", payload: tag });
            }}
            key={tag}
          >
            {tag}
          </small>
        ))}
      </div>
      <div className="quantity">
        <button
          onClick={() => {
            dispatch({ type: "DECREASE" });
          }}
        >
          -
        </button>
        Quantity({state.quantity})
        <button
          onClick={() => {
            dispatch({ type: "INCREASE" });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
