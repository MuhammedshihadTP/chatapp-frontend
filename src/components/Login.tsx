import React, { useEffect } from "react";
import { Socket, io } from "socket.io-client";

import style from "../styles/login.module.scss";
import { Paper, TextField, Button } from "@mui/material";
import Link from "next/link";
import { useFormik } from "formik";
import { loginValidation } from "@/validation/loginvalidation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "@/helpers/auth";
import {useRouter} from "next/router";



function Login() {
  const router= useRouter()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginValidation,
      onSubmit: () => {
        Submit();
      },
    });
  const Submit = async () => {
    try {
      const response = await auth.login(values);
      if (response.status === 200) {
       router.push('/')
      }
      console.log(response);
    } catch (error: any) {
      console.log(error);
      if (error.response.status == 404 || 401 || 500) {
        toast.error(`Error: ${error.response.data.msg}`);
        console.log("helo");
      }
    }
  };
  return (
    <>
    
      <div className={style.container}>
        <Paper className={style.paper}>
          <form action="" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              autoComplete="off"
              autoFocus
              sx={{ width: "300px" }}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              variant="outlined"
              label="Password"
              name="password"
              autoComplete="off"
              autoFocus
              type="password"
              sx={{ width: "300px" }}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{ outline: "black", color: "black", width: "150px" }}
            >
              Login
            </Button>
            <h2>
              Create a New Account{" "}
              <Link className={style.Link} href={"signup"}>
                SignUp
              </Link>
            </h2>
          </form>
        </Paper>
        <div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Login;
