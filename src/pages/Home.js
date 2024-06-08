import React, { useEffect, useState } from "react";
import "../style/Common.css";
import "../style/Home.css";
import ItemBox from "../components/ItemBox";
import Navbar from "../components/Navbar";
import { breweryData } from "../api/Brewery.js";

function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  const [text, setText] = useState("");
  const [option, setOption] = useState("Name");
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await breweryData();
      setData(res);
    }
    fetchData();
  }, []);
  return (
    <div className="HomeOuterContainer">
      <Navbar
        text={text}
        setText={setText}
        option={option}
        setOption={setOption}
        setData={setData}
        getData={breweryData}
      />
      <div className="ListBox">
        {data && data.length > 0 ? (
          data.map((item) => <ItemBox item={item} />)
        ) : (
          <text className="noData">No Brewery Data</text>
        )}
      </div>
    </div>
  );
}

export default Home;
