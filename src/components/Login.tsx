import React from "react";

import style from "../styles/login.module.scss";
import { Paper, TextField,Button } from "@mui/material";
import Link from "next/link";

function Login() {
  return (
    <>
      <div className={style.container}>
        <Paper className={style.paper}>
          <form action="">
            <h3>Login</h3>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              autoComplete="off"
              autoFocus
              sx={{ width: "300px" }}
            />
            <TextField
              variant="outlined"
              label="Password"
              name="Password"
              autoComplete="off"
              autoFocus
              sx={{ width: "300px" }}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{ outline: "black", color: "black", width: "150px" }}
            >
              Login
            </Button>
            <h2>
              Create a New Account  <Link className={style.Link} href={"signup"}>SignUp</Link>
            </h2>
          </form>
        </Paper>
      </div>
    </>
  );
}

export default Login;
