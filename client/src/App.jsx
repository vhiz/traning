import { Suspense, lazy, useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const Post = lazy(() => import("./Post"));
const Shop = lazy(() => import("./Shop"));
import "./app.scss";
import { AuthContext } from "./context/authContex";
import Login from "./pages/login/Login";

export default function App() {
  const { currentUser } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: currentUser ? (
        <Suspense
          fallback={
            <div className="load">
              <img src="/img/loading.gif" alt="" />
            </div>
          }
        >
          <Home />,
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="load">
              <img src="/img/loading.gif" alt="" />
            </div>
          }
        >
          <Login />,
        </Suspense>
      ),
    },
    {
      path: "/shop",
      element: (
        <Suspense
          fallback={
            <div className="load">
              <img src="/img/loading.gif" alt="" />
            </div>
          }
        >
          <Shop />,
        </Suspense>
      ),
    },
    {
      path: "/post",
      element: (
        <Suspense
          fallback={
            <div className="load">
              <img src="/img/loading.gif" alt="" />
            </div>
          }
        >
          <Post />,
        </Suspense>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
