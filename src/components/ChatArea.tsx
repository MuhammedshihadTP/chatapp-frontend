import React from "react";
import style from "./style.module.scss";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from '@mui/icons-material/Send';
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";

function ChatArea() {
  return (
    <div className={style.chatArea_container}>
      <div className={style.chat_header}>
        <p className={style.icon}>s</p>
        <div className={style.header_text}>
          <p className={style.header_title}>shihad</p>
          <p className={style.header_time}>Today</p>
        </div>
        <div>
          <IconButton>
            <CallIcon />
          </IconButton>

          <IconButton>
            <VideoChatIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>

      <div className={style.message_container}>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>

      </div>
      <div className={style.chat_inputBox}>
        <input type="text" placeholder="Type a Message" className={style.type} />
        <IconButton>
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
