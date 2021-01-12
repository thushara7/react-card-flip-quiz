import React, { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import "./app.css";
import axios from "axios";
function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then(res => {
      setFlashcards(
        res.data.results.map((qitem, id) => {
          const answer = qitem.correct_answer;
          const options = [...qitem.incorrect_answers, answer];
          return {
            id: `${id}-${Date.now()}`,
            answer: answer,
            question: qitem.question,
            options: options.sort(() => Math.random() - 0.5)
          };
        })
      );
    });
  }, []);
  return (
    <div>
      <h2 className="heading">Flip the card quiz</h2>
      <FlashcardList flashcards={flashcards}></FlashcardList>
    </div>
  );
}
const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "what is 2+2?",
    answer: "2",
    options: ["1", "2", "3", "4"]
  },
  {
    id: 2,
    question: "question2",
    answer: "answer2",
    options: ["option1", "option2", "option3", "option4"]
  }
];

export default App;
