import React, {useState} from "react";

function QuestionsInput({
  addItem=() => {}
}) {
  const [inputText, changeText] = useState("");
  function handleChange(event){
    const newText = event.target.value;
    changeText(newText);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={() => {
        changeText("");
        addItem(inputText);
        }}>
        <span>Post</span>
      </button>
    </div>
  );
}

export default QuestionsInput;