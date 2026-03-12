import React, { useState } from "react";
import QuestionsInput from "./QuestionsInput";
import QuestionsList from "./QuestionsList";

function Questions() {
  const [questions, setQuestions] = useState([]);

  // ADDS COMMENT TO 
  function addItem(item) {
    const currTime = findTime();
    setQuestions(prevQuestions => {
      return [...prevQuestions, {
        id: (prevQuestions.length === 0) ? 0 : prevQuestions[prevQuestions.length - 1].id + 1,
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

  // CURRENTLY UNUSED
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addReplyToQuestion(questionId, newReplyText) {
    console.log(`Adding reply: ${newReplyText} to question ${questionId}`);
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        // ONLY ADDS REPLY TO MATCHING QUESTION ID
        console.log(question);
        if (question.id === questionId) {
          console.log("Adding reply");
          return {
            ...question,
            replies: [...question.replies, { text: newReplyText, date: findTime(), name: "Anonymous" }]
          };
        }
        return question; 
      });
    });
  }

  return (
    <div className="gap-4 rounded-lg shadow-md p-6 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-1/2 normal-case font-medium text-olive-100">
      <div className="heading">
         <h1>Questions</h1>
      </div>
      <QuestionsInput 
        addItem={addItem}
      />
      <QuestionsList items={questions} onAddReply={addReplyToQuestion}/>
    </div>

  );
}

export default Questions;
