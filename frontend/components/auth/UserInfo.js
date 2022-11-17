import React, { useEffect, useState } from "react";
import { API } from "../../config";

const UserInfo = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    setUser(userInfo);
  }, []);

  return (
    <React.Fragment>
      <div className="container px-5">
        <div className="card text-center mx-5">
          <div className="mt-3">
            <img
              className="card-img-top img w-50 h-50"
              src={user ? `${API}/user/photo/${user.username}` : ""}
              alt="Image name"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <h5 className="card-text">Email: {user.email}</h5>
            <h5 className="card-text">
              Role: {user.role === 1 ? "Admin" : "User"}
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
