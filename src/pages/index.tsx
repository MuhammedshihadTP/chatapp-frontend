import { Button } from "@mui/material";
import Link from "next/link";

import style from "../styles/Home.module.scss";
import Maincontainer from "@/components/Maincontainer";

export default function Home() {
  return (
    <>
      <div className={style.App}>
       <Maincontainer/>
      </div>
    </>
  );
}
