import React, { useState } from "react";

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  console.log("fla", flashcard);
  const handleFlip = event => {
    setFlip(!flip);
  };
  return (
    <div
      className="card"
      style={{ backgroundColor: flip ? "#ffecec" : "white" }}
      onClick={() => setFlip(!flip)}
    >
      {flip === false ? (
        <div>
          <h3> {flashcard.question}</h3>

          <div className="flashcard-options">
            {flashcard.options.map(option => {
              return (
                <li className="flashcard-option" key={option}>
                  {option}
                </li>
              );
            })}
          </div>
        </div>
      ) : (
        <div>{flashcard.answer}</div>
      )}
    </div>
  );
};

export default Flashcard;
