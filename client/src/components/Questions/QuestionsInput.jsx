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
      <input 
        className="border rounded-md px-3.5 py-2 opacity-100 text-md normal-case font-medium bg-slate-50 text-olive-100 shadow-zinc-500/50 bg-transparent border-slate-600 hover:border-slate-300 w-80 focus:border-slate-800"
        onChange={handleChange} 
        type="text" 
        value={inputText} 
    />
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