import React, { useEffect } from "react";
import { useState } from "react";
import { getCookie, updateUser } from "../../actions/auth";
import { getProfile, update } from "../../actions/user";
import { API } from "../../config";

const ProfileUpdate = () => {
  const [imageName, setImageName] = useState("");
  const [values, setValues] = useState({
    username: "",
    username_for_photo: "",
    name: "",
    email: "",
    about: "",
    password: "",
    error: false,
    success: false,
    loading: false,
    photo: "",
    userData: "",
  });
  
  const {
    username,
    username_for_photo,
    name,
    email,
    about,
    password,
    error,
    success,
    loading,
    photo,
    userData,
  } = values;
  const token = getCookie("token");

  const init = () => {
    getProfile(token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          username: data.username,
          username_for_photo: data.username,
          name: data.name,
          email: data.email,
          about: data.about,
          userData: typeof window !== "undefined" && new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    name === "photo" && setImageName(value.name);
    userData.set(name, value);
    setValues({
      ...values,
      [name]: value,
      userData,
      error: false,
      success: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true });
    update(token, userData).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
          loading: false,
        });
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            username: data.username,
            username_for_photo: data.username + '',
            name: data.name,
            email: data.email,
            about: data.about,
            password: "",
            success: true,
            loading: false,
          });
          setImageName("");
        });
      }
    });
  };

  const profileUpdateForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="btn btn-outline-info" style={{ cursor: "pointer" }}>
            Profile photo
            <input
              onChange={handleChange("photo")}
              type="file"
              accept="image/*"
              hidden
            />
          </label>
          <small className="ml-2">{imageName}</small>
        </div>
        <div className="form-group">
          <label className="text-muted">Username</label>
          <input
            onChange={handleChange("username")}
            type="text"
            value={username}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            value={name}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            onChange={handleChange("email")}
            type="text"
            value={email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-muted">About</label>
          <textarea
            onChange={handleChange("about")}
            type="text"
            value={about}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-muted">Password</label>
          <input
            onChange={handleChange("password")}
            type="text"
            value={password}
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      Profile updated
    </div>
  );

  const showLoading = () => (
    <div
      className="alert alert-info"
      style={{ display: loading ? "" : "none" }}
    >
      Loading...
    </div>
  );
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={`${API}/user/photo/${username_for_photo}`}
              className="img img-fluid img-thumbnail mb-3"
              style={{ maxHeight: "auto", maxWidth: "100%" }}
              alt="user profile"
            />
          </div>
          <div className="col-md-8 mb-5">
            {showSuccess()}
            {showError()}
            {showLoading()}
            {profileUpdateForm()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileUpdate;
