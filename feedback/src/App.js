import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

function App() {
  const FeedbackData = [
    { id: 1, rating: 10, text: "Excellent product" },
    { id: 2, rating: 8, text: " Very Good product" },
    { id: 3, rating: 7, text: "  Good product" },
  ];
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const DeleteFeedback = (id) => {
    if (window.confirm("are you sure you want to Delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header text="Hello World" />
      <div className="App">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={DeleteFeedback} />
      </div>
    </>
  );
}

export default App;
// {/* <h1>{title}</h1>
//       <p>{body}</p>
//       <div> Comments ({comments.length})</div>

//       {showComments && (
//         <ul>
//           {comments.map((comment, index) => (
//             <li key={index}> {comment.text} </li>
//           ))}
//         </ul>
//       )} */}
