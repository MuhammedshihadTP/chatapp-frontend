import React from "react";
import style from "./style.module.scss";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItrms from "./ConversationItrms";
function                            Sidebar() {
  return (
    <div className={style.sidebar_container}>
      <div className={style.sb_header}>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </div>
      </div>
      <div className={style.sb_search}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search" className={style.search_box} />
      </div>
      <div className={style.sb_conversation}>
        <ConversationItrms/>
      </div>
    </div>
  );
}

export default Sidebar;
