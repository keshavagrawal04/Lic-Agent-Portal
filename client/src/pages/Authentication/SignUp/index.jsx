import { Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { signUpSchema } from "../../../schemas/authenticationSchema";
import { Link } from "react-router-dom";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Row
        className="d-flex border justify-content-center mx-5 rounded-2"
        style={{ backgroundColor: "#ffffeb" }}
      >
        <Row className="text-center mb-4">
          <h2 className="fs-4 fw-bold py-3">Sign Up</h2>
        </Row>
        <Row className="mb-4">
          <Col className="text-center" xl={6} lg={6}>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              placeholder="Enter Your Email"
              className="form-input rounded-3 p-1"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger error">{formik.errors.email}</div>
            ) : (
              <div className="error2"></div>
            )}
          </Col>
          <Col className="text-center" xl={6} lg={6}>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              placeholder="Enter Your Phone Number"
              className="form-input rounded-3 p-1"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-danger error">
                {formik.errors.phoneNumber}
              </div>
            ) : (
              <div className="error2"></div>
            )}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center" xl={6} lg={6}>
            <input
              type="password"
              name="password"
              id="email"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              placeholder="Enter Your Password"
              className="form-input rounded-3 p-1"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger error">{formik.errors.password}</div>
            ) : (
              <div className="error2"></div>
            )}
          </Col>
          <Col className="text-center" xl={6} lg={6}>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              placeholder="Confirm Your Password"
              className="form-input rounded-3 p-1"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger error">
                {formik.errors.confirmPassword}
              </div>
            ) : (
              <div className="error2"></div>
            )}
          </Col>
        </Row>
        <Row className="text-center">
          <h2 className="fs-6 fw-bold py-3">
            Already have account ?{" "}
            <Link to="/authentication/signin">Sign In</Link>
          </h2>
        </Row>
        <Row className="text-center mb-4">
          <button type="submit" id="btn" className="btn fw-bold text-light">
            Sign In
          </button>
        </Row>
      </Row>
    </form>
  );
};

export default SignUp;
