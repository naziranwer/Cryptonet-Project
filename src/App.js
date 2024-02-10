import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data from api", data);

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      {data.length > 0 ? <Card data={data} /> : <img src="/shimmer.gif" />}
    </div>
  );
};

export default App;
