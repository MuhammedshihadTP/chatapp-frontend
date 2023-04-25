import { Button } from "@mui/material";
import Link from "next/link";

import style from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={style.main_container}>
        <Button variant="contained" color="inherit">
          Login
        </Button>
        <Button variant="contained" color="inherit">
          Sign Up
        </Button>
      </div>
    </>
  );
}
