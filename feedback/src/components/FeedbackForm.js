import React, { useState, useContext, useEffect } from "react";
import { RatingSelect } from "./RatingSelect.js";
import Button from "./shared/Button.js";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const changeHandler = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text: text,
      rating: rating,
    };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }

    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <input
          type="text"
          name=""
          placeholder="write a review"
          value={text}
          onChange={changeHandler}
        />
        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>

        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

export default FeedbackForm;
