import React from "react";
import style from "../styles/signup.module.scss";
import { Button, Paper, TextField } from "@mui/material";
import Link from "next/link";
import { useFormik } from "formik";
import { signupValidationSchema } from "@/validation/validation";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const router = useRouter();

  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      validationSchema: signupValidationSchema,
      onSubmit: () => {
        Submit();
      },
    });
  const Submit = async () => {
    try {
      console.log("submited");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/signup`,
        values
      );
      router.push("/login");
      console.log(response.status);
    } catch (error: any) {
      toast.error(`Error: ${error.response.data.msg}`);
    }
  };

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
            error={touched.name && Boolean(errors.name) }
            helperText={ touched.name && errors.name}
          />
          {/* {errors.name && touched.name && (
            <p className={style.error}>{errors.name}</p>
          )} */}

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
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            // className={errors.email && touched.email ? style.input_error : ""}
          />

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
            error={touched.password && Boolean(errors.password)  }
            helperText={touched.password && errors.password}
          />

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
            error={touched.confirmpassword && Boolean(errors.confirmpassword)}
            helperText={touched.confirmpassword && errors.confirmpassword}
          />

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
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}
