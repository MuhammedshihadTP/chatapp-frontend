import { Button } from "@mui/material";
import Link from "next/link";

import style from "../styles/Home.module.scss";
import Maincontainer from "@/components/Maincontainer";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import  io from "socket.io-client";



export default function Home() {
  const router=useRouter()
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {


    const auth = async () => {
      

      try {

        const authCookie:any = Cookies.get('auth');
      
      const { token, userId } = JSON.parse(authCookie);
        const respons = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/home`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const url:any=process.env.NEXT_PUBLIC_SERVER_URL
        const socket = io(url,{ query: { userId } }).connect();
        console.log(respons);
        setAuthenticated(true);
      } catch (error:any) {
        console.log(error.response);
        console.log(error.response);
        const status = error.response?.status;
        if (status === 401 || status === 403 || status === 500) {
          router.push("/login");
        }
      }
    };
    auth();
  }, []);

  // useEffect(() => {
    

  //   socket.on('connect', () => {
  //     console.log('Connected to server');
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('Disconnected from server');
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <>
      {/* <div className={style.App}>
        <Maincontainer />
      </div> */}
         {authenticated && (
        <div className={style.App}>
          <Maincontainer />
        </div>
      )}
    </>
  );
}
