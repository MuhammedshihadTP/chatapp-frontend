import * as yup from "yup"; 


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const loginValidation=yup.object().shape({
    email: yup.string().email("please Enter Valid Email").required("Requaired"),
    password: yup
    .string()
    .min(5)
    .max(16)
    .matches(passwordRules, { message: "Please create a strong password" })
    .required("Requaired"),
})