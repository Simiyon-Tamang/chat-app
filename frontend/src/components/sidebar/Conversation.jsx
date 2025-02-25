import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../contexts/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  console.log("isOnline", isOnline);
  return (
    <>
      <div
        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-blue-500 cursor-pointer
          ${isSelected ? "bg-blue-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-10 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            {/*<span className="text-m">❤️</span>*/}
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
