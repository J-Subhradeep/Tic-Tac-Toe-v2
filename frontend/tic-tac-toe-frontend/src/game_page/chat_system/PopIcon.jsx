import React, { useState } from "react";
import { PopIconWrapper } from "../styles/popicon.styled";
import img1 from "../../assets/images/game_page/chat.jfif";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const PopIcon = ({ unseenChats, onClick, isChatboxOpen, toggleChatbox }) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -100,
      top: -90,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  // right: -100,
  // top: -90,

  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
    toggleChatbox();
    onClick();
  };
  return (
    <div
      className="whole"
      style={{ position: "fixed", bottom: "15px", right: "15px" }}
    >
      <PopIconWrapper>
        <div className="icon">
          {unseenChats > 0 && !isChatboxOpen && ( 
            <StyledBadge
              badgeContent={unseenChats}
              color="secondary"
              className="badge"
            ></StyledBadge>
          )}
          <img
            src={img1}
            alt="logo"
            className=" transition-3 chatButton"
            onClick={openForm}
          />

          <div className="transition-3 hello">Let's Chat 🤙</div>
        </div>
        {/* </StyledBadge> */}
      </PopIconWrapper>
    </div>
  );
};

export default PopIcon;
