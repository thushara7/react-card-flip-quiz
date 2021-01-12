import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="list-card">
      {flashcards.map((flashcard, i) => (
        <Flashcard flashcard={flashcard} key={i}></Flashcard>
      ))}
    </div>
  );
};

export default FlashcardList;
