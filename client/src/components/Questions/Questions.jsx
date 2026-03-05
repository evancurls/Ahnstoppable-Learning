import React, { useState } from "react";
import QuestionsInput from "./QuestionsInput";
import QuestionsList from "./QuestionsList";

function Questions() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems(prevItems => {
      return [...prevItems, item];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Questions</h1>
      </div>
      <QuestionsInput 
        addItem={addItem}
      />
      <QuestionsList items={items}/>
    </div>
  );
}

export default Questions;
