import React, { useState, useEffect } from "react";
import Link from "next/link";
import { authenticate, isAuth, signin } from "../../actions/auth";
import Router from "next/router";

const SigninComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    isAuth() && Router.push("/");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setError(data.error)
        setLoading(false)
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter your email..."
          />
        </div>
        <div className="form-group">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter your password..."
          />
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" type="submit">
            Signin
          </button>
          <Link href="/auth/password/forgot" style={{ color: "red" }}>
            Forgot password
          </Link>
        </div>
      </form>
    );
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {signinForm()}
      <br />
      <div>
        You don't have an account? <Link href="/signup">Signup.</Link>
      </div>
    </React.Fragment>
  );
};

export default SigninComponent;
