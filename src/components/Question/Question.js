import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import "./question.scss";
export const Question = ({ title, description }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className='holder'>
      <div className='question-holder'>
        <h3>{title}</h3>

        {showAnswer ? (
          <BiHide onClick={() => setShowAnswer(!showAnswer)} />
        ) : (
          <BiShow onClick={() => setShowAnswer(!showAnswer)} />
        )}
      </div>
      {showAnswer && <p className='show'>{description}</p>}
    </div>
  );
};
