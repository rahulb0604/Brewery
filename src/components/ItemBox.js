import React from "react";
import "../style/ItemBox.css";
import { useNavigate } from "react-router-dom";

export default function ItemBox({ item }) {
  const navigate = useNavigate();
  const openDetails = () => {
    navigate("/brewery-detail", {
      state: { item },
    });
  };
  return (
    <div className="Itembox" key={item.id} onClick={() => openDetails()}>
      <text>
        <strong>Name:</strong>
        {item.name}
      </text>
      <text>
        <strong>Address:</strong> {item.address_1} {item.address_2}{" "}
        {item.address_3}
      </text>
      <text>
        <strong>Contact:</strong> {item.phone}
      </text>
      <text>
        <strong>Website Url:</strong> {item.website_url}
      </text>
      <text>
        <strong>State:</strong> {item.state}
      </text>
      <text>
        <strong>City:</strong> {item.city}
      </text>
    </div>
  );
}
