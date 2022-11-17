import { withRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { resetPassword } from "../../../../actions/auth";
import Layout from "../../../../components/Layout";

const ResetPassword = ({ router }) => {
  const [values, setValues] = useState({
    newPassword: "",
    error: "",
    message: "",
    showForm: true,
  });

  const { newPassword, error, message, showForm} = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword({
      newPassword,
      resetPasswordLink: router.query.id,
    }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
        });
      } else {
        setValues({
          ...values,
          error: data.message,
          showForm: false,
          newPassword: "",
          error: false,
        });
      }
    });
  };

  const passwordResetForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group pt-5">
          <input
            type={"password"}
            onChange={(e) =>
              setValues({ ...values, newPassword: e.target.value })
            }
            className="form-control"
            placeholder="Enter new password"
            required
          />
        </div>
        <div>
          <button className="btn btn-primary">Change password</button>
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
          <h2>Reset password</h2>
          <hr />
          {showError()}
          {showMessage()}
          {showForm && passwordResetForm()}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(ResetPassword);
