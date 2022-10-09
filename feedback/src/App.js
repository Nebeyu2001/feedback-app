import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const FeedbackData = [
    { id: 1, rating: 10, text: "Excellent product" },
    { id: 2, rating: 8, text: " Very Good product" },
    { id: 3, rating: 7, text: "  Good product" },
  ];

  return (
    <>
      <FeedbackProvider>
        <Header text="Hello World" />
        <div className="App">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </FeedbackProvider>
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
