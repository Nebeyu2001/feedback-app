import React, { useState } from "react";

function FeedbackItem({ item, handleDelete }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is a FeedbackItem");

  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //     setText("Now rating is 8");
  //   };

  return (
    <div>
      <div>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
      <div>{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  );
}

export default FeedbackItem;
