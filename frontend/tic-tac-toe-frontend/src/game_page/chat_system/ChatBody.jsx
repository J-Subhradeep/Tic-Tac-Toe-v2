/*{5import React, { useRef, useEffect } from "react";
import { ChatBodyWrapper } from "../styles/chatbody.styled";


const ChatBody = () => {
  // const messagesRef = useRef(null);
  
    
  // Scroll bar adjustment
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
          <div className="message sender">
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

export default ChatBody;}*/


import React, { useRef, useEffect,useState } from "react";
// import useWebSocket, { ReadyState } from 'react-use-websocket';
import { ChatBodyWrapper } from "../styles/chatbody.styled";


const ChatBody = ({ messageHistory }) => {
  // const messagesRef = useRef(null);
  //comparing lastmessages and Sender



   
  // const send = (message)=>{
  //   sendMessage(
  //     JSON.stringify({
  //       from:"",
  //       to:"",
  //       message: message
  //     })
  //   )
  // }

    
  // Scroll bar adjustment
  useEffect(() => {
    var messagesRef = document.getElementById("scrollChat");
    setTimeout(() => {
      messagesRef.scrollTop = messagesRef.scrollHeight;
    }, 1500)
  }, []);

  useEffect(() => {
    console.log(messageHistory);
  }, []);


  return (

    <div className="messages" id="scrollChat">
      <ChatBodyWrapper>
        <div className="chat-messages" >

        {messageHistory.map((message, index) => {
            const isChatUser = message.from === localStorage.getItem("name");
            return (
              <div
                className={`message ${isChatUser ? "sender": ""}`}
                key={index}
              >
                <div className="content">
                  <p>{message.msg}</p>
                </div>
              </div>
              
            );
          })}

        </div>
      </ChatBodyWrapper>
    </div>

  );
};

export default ChatBody;