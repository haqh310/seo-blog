import React, { useState } from "react";
import { forgotPassword } from "../../../actions/auth";
import Layout from "../../../components/Layout";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
    message: "",
    error: "",
    showForm: true,
  });

  const { email, message, error, showForm } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value, error: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, message: "", error: "" });
    forgotPassword({ email }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          message: data.message,
          email: "",
          showForm: false,
        });
      }
    });
  };

  const passwordForgotForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group pt-5">
          <input
            type={"email"}
            onChange={handleChange("email")}
            className="form-control"
            value={email}
            placeholder="Enter your email..."
            required
          />
        </div>
        <div>
          <button className="btn btn-primary">Send password reset link</button>
        </div>
      </form>
    );
  };

  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";
  return (
    <React.Fragment>
      <Layout>
        <div className="container">
          <h2>Forgot password</h2>
          <hr />
          {showError()}
          {showMessage()}
          {showForm && passwordForgotForm()}
        </div>
      </Layout>
    </React.Fragment>
  );
};
export default ForgotPassword;
