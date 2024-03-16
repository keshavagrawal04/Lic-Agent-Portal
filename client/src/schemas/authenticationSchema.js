import * as Yup from "yup";

export const signUpSchema = Yup.object({
  email: Yup.string().email().required("Please Enter email"),
  password: Yup.string()
    .required("Please Enter Password")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])/, "Password must contain at least one letter")
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[@$!%*#?&])/,
      "Password must contain at least one special character"
    )
    .matches(
      /^[A-Za-z\d@$!%*#?&]+$/,
      "Password must not contain invalid characters"
    ),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message: "Phone number must be exactly 10 digits",
    })
    .required("Please Enter Phone Number"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match.")
    .required("Please Enter confirm password"),
});
