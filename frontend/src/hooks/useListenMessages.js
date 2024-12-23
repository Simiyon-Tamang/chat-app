import { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "../contexts/SocketContext";
const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
};
export default useListenMessages;
