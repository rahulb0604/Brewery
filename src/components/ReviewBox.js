import React from "react";
import "../style/ReviewBox.css";

export default function ReviewBox({ item }) {
  console.log(item);
  return (
    <div className="ReviewContainer">
      <div className="reviewBoxContainer">
        <div className="userAndTime">
          <text>{item?.user?.username} | </text>
          <text>Posted on {item?.createdAt?.split("T")[0]}</text>
        </div>
        <div className="reviewContent">
          <text>{item?.review}</text>
        </div>
      </div>
    </div>
  );
}
