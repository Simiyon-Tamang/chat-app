import React from "react";

export const MessageInput = () => {
  return (
    <div className="px-3 py-2 border-t dark:border-zinc-700">
      <div className="flex gap-2">
        <input
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
          id="chatInput"
          type="text"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
          id="sendButton"
        >
          Send
        </button>
      </div>
    </div>
  );
};
