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
    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xl">
        <input 
            name="questions-input"
            className="flex-1 text-slate-800 border-2 border-slate-600 rounded-md 
                px-3.5 pt-2 pb-4 bg-slate-50 outline-none transition-all duration-200 
                hover:border-blue-400 focus:border-blue-400"
            onChange={handleChange} 
            type="text" 
            value={inputText} 
            maxLength={125}
        />
    <button 
        className="border border-slate-400 rounded-md px-4 py-2 opacity-100 transition-colors duration-150 shadow-none text-md normal-case font-normal text-olive-300 bg-transparent border-current hover:bg-slate-600"
        onClick={() => {
        changeText("");
        addItem(inputText);
        }}
    >
        <span>Post</span>
    </button>
</div>
  );
}

export default QuestionsInput;