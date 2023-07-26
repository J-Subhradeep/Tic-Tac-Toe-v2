import React, { useState } from "react";
import { PopIconWrapper } from "../styles/popicon.styled";
import img1 from "../../assets/images/game_page/chat.jfif";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";

const PopIcon = ({ unseenChats, onClick}) => {
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
    onClick();
  };
  return (
    <div
      className="whole"
      style={{ position: "fixed", bottom: "15px", right: "15px", zIndex: 10}}
    >
      <PopIconWrapper>
        <div className="icon">
          {unseenChats > 0 && ( 
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
