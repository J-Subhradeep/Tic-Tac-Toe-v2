import React from "react";
import { ChatWrapper } from "../styles/chatbox.styled";
import img1 from "../../assets/images/game_page/chat.jfif";
import img2 from "../../assets/images/game_page/close-icon-30.png";
import img3 from "../../assets/images/game_page/send.jfif";
import img4 from "../../assets/images/game_page/download.png";

const ChatSystem = () => {
  // Onclick Functions
  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  };
  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  };

  return (
    <ChatWrapper>
      <div className="container">
        <img
          src={img1}
          className="open-button"
          onClick={openForm}
          alt="logo"
          style={{ width: 120, height: 110 }}
        />
        <div class="chat-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <div className="strip">
              <img
                src={img2}
                alt=""
                className="btn cancel"
                onClick={closeForm}
              />

              <div className="heading">
                <img
                  src={img4}
                  alt=""
                  srcset=""
                  className="chat2"
                  style={{ width: 50, height: 50 }}
                />
                <h1>
                  Chit
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chat
                </h1>
              </div>
            </div>

            <div className="messages">
              <div class="msg-container">
                <img src="#" alt="Avatar" />
                <p>Hello</p>
                <span class="time-right">11:00</span>
              </div>
              <div class="msg-container darker">
                <img src="#" alt="Avatar" className="right"></img>
                <p>Hi </p>
                <span class="time-left">00:01</span>
              </div>

              {/* <div class="msg-container">
                <img src="#" alt="Avatar" />
                <p>How are you?</p>
                <span class="time-right">00:02</span>
              </div> */}
            </div>
            <div className="lower-strip">
              <textarea
                placeholder="Type message.."
                name="msg"
                required
              ></textarea>

              <button type="submit" className="btn">
                <img src={img3} alt="" srcset="" className="send" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatSystem;
