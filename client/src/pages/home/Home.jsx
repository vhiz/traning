import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import "./home.scss";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  const { isLoading, error, data } = useQuery(["items"], async () => {
    const res = await makeRequest.get("/user/items");
    return res.data;
  });

  return (
    <div className="home">
      <Navbar />
      {isLoading ? (
        <div className="load">
          <img src="/img/loading.gif" alt="" />
        </div>
      ) : error ? (
        "Error"
      ) : (
        <div className="cardContanier">
          {data.map((item) => (
            <Card item={item} key={data.id} />
          ))}
        </div>
      )}
    </div>
  );
}
