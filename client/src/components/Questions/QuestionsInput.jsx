import React, { useState } from "react";

function QuestionsInput({
  addItem=() => {}
}) {
  const [inputText, changeText] = useState("");
  function handleChange(event){
    const newText = event.target.value;
    changeText(newText);
  }

    return (
        <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden transition-all duration-300">
        {/* Questions input section */}
            <div className="p-1">
            <textarea
                name="questions-input"
                rows="3"
                className="w-full p-4 text-slate-900 dark:text-white bg-transparent outline-none resize-none placeholder-slate-400 dark:placeholder-slate-500 font-medium"
                onChange={handleChange}
                placeholder="Post any questions here:"
                value={inputText}
                maxLength={125}
            />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
                {/* Char Count */}
                <span className={`text-xs font-medium ${inputText.length >= 110 ? 'text-orange-500' : 'text-slate-500 dark:text-slate-400'}`}>
                    {inputText.length} / 125
                </span>


                <button
                    className="px-5 py-2 rounded-md font-semibold text-sm tracking-wide transition-all duration-200 
                        text-white bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    onClick={() => {
                        changeText("");
                        addItem(inputText);
                    }}
                    disabled={!inputText.trim()}
                >
                    Post Question
                </button>
            </div>
        </div>
    );
}

export default QuestionsInput;