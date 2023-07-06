import React, { useRef, useEffect } from "react";
import { ChatBodyWrapper } from "../styles/chatbody.styled";


const ChatBody = () => {
  // const messagesRef = useRef(null);

  useEffect(() => {

    var messagesRef = document.getElementById("scrollChat");
    setTimeout(() => {
      messagesRef.scrollTop = messagesRef.scrollHeight;
    }, 1500)


  }, []);


  return (

    <div className="messages" id="scrollChat">
      <ChatBodyWrapper>
        <div className="chat-messages"  >
          <div className="message receiver">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>
          <div className="message sender">
            <div className="content">
              <p>Hi, How are you? I am fine. You?</p>
            </div>
          </div>
          <div className="message receiver">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>
          <div className="message sender">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>
          <div className="message sender">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>

          <div className="message sender">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>

          <div className="message sender">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>

          <div className="message sender">
            <div className="content">
              <p>Hi,How are you?I am fine. You?</p>
            </div>
          </div>

          <div className="message receiver">
            <div className="content">
              <p>Hi,How are you?I am fine. You?</p>
            </div>
          </div>

        </div>
      </ChatBodyWrapper>
    </div>

  );
};

export default ChatBody;