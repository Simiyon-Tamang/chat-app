import React, { useEffect, useRef } from "react";
import { Message } from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";

export const Messages = () => {
  const { messages, loading } = useGetMessages();
  const containerRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto" ref={containerRef}>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-200">
            Send a message to start the convesation
          </p>
        </div>
      )}
    </div>
  );
};
