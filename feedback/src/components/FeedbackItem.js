import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is a FeedbackItem");

  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //     setText("Now rating is 8");
  //   };
  const { DeleteFeedback, EditFeedback } = useContext(FeedbackContext);
  return (
    <div>
      <div>{item.rating}</div>
      <button onClick={() => DeleteFeedback(item.id)}>Delete</button>
      <button onClick={() => EditFeedback(item)}>Edit</button>
      <div>{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  );
}

export default FeedbackItem;
