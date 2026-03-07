import React from 'react';
import RepliesList from './RepliesList'; // Adjust path as needed

function ReplyToggle({ replies = [], showReplies, onToggle }) {
  // IF NO REPLIES, DONT RENDER ANYTHING 
  if (replies.length === 0) return null;

  return (
    <div className="mt-2">
      {showReplies ? (
        <>
          <RepliesList replies={replies} />
          <button 
            onClick={onToggle} 
            className="text-blue-300 italic mb-4 hover:underline cursor-pointer"
          >
            Hide replies
          </button>
        </>
      ) : (
        <button 
          onClick={onToggle} 
          className="text-blue-300 italic mb-4 hover:underline cursor-pointer"
        >
          Show {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
        </button>
      )}
    </div>
  );
}

export default ReplyToggle;