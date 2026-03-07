import React, { useState } from "react";
import QuestionsInput from "./QuestionsInput";
import QuestionsList from "./QuestionsList";

function Questions() {
  const [items, setItems] = useState([]);
  const [questions, setQuestions] = useState([{
    name: "Anonymous",
    date: "",
    replies: [],
    likes: 0
  }]);

  function addItem(item) {
    const currTime = findTime();
    setItems(prevItems => {
      return [...prevItems, item];
    });
    setQuestions(prevQuestions => {
      return [...prevQuestions, {
        name:"Anonymous",
        date: currTime,
        text: item,
        replies: [],
        likes: 0,
      }]
    });
  }

  function findTime(){
    const now = new Date().toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', hour12: true });
    console.log(now);
    return now;
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="rounded-lg shadow-md p-6 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-1/2 text-md normal-case font-medium text-olive-100">
      <div className="heading">
        <h1>Questions</h1>
      </div>
      <QuestionsInput 
        addItem={addItem}
      />
      <QuestionsList items={questions}/>
    </div>
  );
}

export default Questions;
