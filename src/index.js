import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Header from "./components/organisms/header";
import Categories from "./components/molecules/categories";
import NewsSection from "./components/organisms/newsSection";
import Skeleton from "./components/molecules/skeleton";
const App = () => {
  const PAGE_SIZE = 18;
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("in");
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  useEffect(() => {
    fetchNews();
  }, [country, page]);
  const fetchNews = async () => {
    setData([]);
    const data = await axios.get(
      process.env.ENDPOINT +
        "top-headlines?country=" +
        country +
        "&pageSize=" +
        PAGE_SIZE +
        "&page=" +
        page +
        "&apiKey=" +
        process.env.KEY
    );
    setData(data);
    setTotalArticles(data.data.totalResults);
  };
  return (
    <div>
      <Header
        country={country}
        onCountryChange={(c) => {
            setCountry(c.target.value)
            setPage(1)
        }}
      />
      <hr />
      <Categories />
      {data.length === 0? <Skeleton/> :
      <NewsSection data={data} />
  }
      <div className="flex justify-between m-2">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="bg-blue-500 disabled:bg-gray-500 text-white p-2 rounded-md">{"<<Previous Page"}</button>
        <button disabled={page*PAGE_SIZE >= totalArticles} onClick={() => setPage(page + 1)} className="bg-blue-500 disabled:bg-gray-500 text-white p-2 rounded-md">{"Next Page >>"}</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
