import { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "./reducers/postReducer";

export default function Post() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error });
      });
  };
  return (
    <div>
      <button onClick={handleFetch}>Fetch</button>
      {state.loading ? (
        "loading...."
      ) : state.error ? (
        "error"
      ) : (
        <>
          <h1>{state.post.title}</h1>
          <p>{state.post.body}</p>
        </>
      )}
    </div>
  );
}
