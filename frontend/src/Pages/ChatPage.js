import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");

    setChats(data);
  };

  //useEffect is a hook in react which runs when the component is rendered for the frist time
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}> {chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
