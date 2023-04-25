import React from "react";
import style from "../styles/signup.module.scss";
import { Button, Paper, TextField } from "@mui/material";
import Link from "next/link";
import { useFormik } from "formik";
import { signupValidationSchema } from "@/validation/validation";

export default function Signup() {
  const onSubmit = () => {
    console.log("submited");
  };
  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      },

      validationSchema: signupValidationSchema,
      onSubmit,
    });

  console.log(errors);

  return (
    <div className={style.box}>
      <Paper className={style.box_content} elevation={5}>
        <form action="" onSubmit={handleSubmit}>
          {/* <div className={style.form_contant}> */}
          <h3>Sign Up</h3>
          <TextField
            variant="outlined"
            label="Name"
            name="name"
            autoComplete="off"
            autoFocus
            sx={{ width: "300px" }}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className={style.error}>{errors.name}</p>
          )}

          <TextField
            variant="outlined"
            label="Email"
            name="email"
            autoFocus
            autoComplete="off"
            sx={{ width: "300px", outline: "black" }}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? style.input_error : ""}
          />
          {errors.email && touched.email && (
            <p className={style.error}>{errors.email}</p>
          )}
          <TextField
            variant="outlined"
            label="Password"
            name="password"
            autoFocus
            autoComplete="off"
            sx={{ width: "300px", outline: "black" }}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className={style.error}>{errors.password}</p>
          )}
          <TextField
            variant="outlined"
            label="Confirm Password"
            name="confirmpassword"
            autoFocus
            autoComplete="off"
            sx={{ width: "300px", outline: "black" }}
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmpassword && touched.confirmpassword && (
            <p className={style.error}>{errors.confirmpassword}</p>
          )}

          <Button
            variant="contained"
            type="submit"
            sx={{ outline: "black", color: "black", width: "150px" }}
          >
            Sign Up
          </Button>
          <h2>
            already have a account ? <Link href={"login"}> Login</Link>
          </h2>
        </form>
      </Paper>
    </div>
  );
}
