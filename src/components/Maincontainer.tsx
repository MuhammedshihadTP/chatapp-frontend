import React, { useEffect } from "react";
import style from "./style.module.scss";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import { useRouter } from "next/router";
import { io } from "socket.io-client";

function Maincontainer() {

  const router = useRouter();

  return (
    <div className={style.main_container}>
      <Sidebar />
      <ChatArea />
    </div>
  );
}

export default Maincontainer;
