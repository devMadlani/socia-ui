import React, { useContext, useEffect, useRef, useState } from "react";
import Topbar from "../../components/toolbar/TopBar";
import "./messanger.css";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatonline/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { NoAdultContentOutlined } from "@mui/icons-material";

function Messanger() {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  // console.log(user);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/conversation/" + user?._id.$oid
        );
        setConversation(res.data);

        // console.log(res.data);
      } catch (error) {
        res.status(500).json(error);
      }
    };
    getConversation();
  }, [user?._id.$oid]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/message/" + currentChat?._id
        );
        setMessages(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat?._id]);

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      sender: user?._id.$oid,
      text: newMessage,
      conversationId: currentChat?._id,
    };
    try {
      const res = await axios.post(
        "http://localhost:8800/api/message",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    scrollRef?.current?.scrollIntoView({behavior:"smooth"})
  },[messages])
  console.log(messages);
  return (
    <>
      <Topbar />
      <div className="messanger">
        <div className="chatMenu">
          <div className="chatMenuWrapeer">
            <input
              className="chatMenuInput"
              type="text"
              placeholder="search for friends"
            />
            {conversation.map((conv) => (
              <div onClick={() => setCurrentChat(conv)} key={conv._id}>
                <Conversation conversation={conv} currentuser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapeer">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((message) => (
                    <div ref={scrollRef} key={message._id}>
                      <Message
                        message={message}
                        own={message.sender === user._id.$oid}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Write something..."
                    className="chatMessageInput"
                  ></textarea>
                  <button className="chatSubmitBtn" onClick={handleSend}>
                    send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversation">
                Open a conversation to start chat
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapeer">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messanger;
