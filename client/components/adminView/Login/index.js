import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { adminLogin } from "../../../redux/actions/adminActions";

const Login = (props) => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("credentials: ", credentials);
  }, [credentials]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.adminLogin(credentials);
  };

  useEffect(() => {
    if (props.adminAccess && !props.isLoading) {
      router.push("/admin");
    }

    console.log("this is running");
    console.log("admin_access: ", props.adminAccess);
  }, [props.adminAccess, props.history, props.isLoading]);

  return (
    <div className={styles["login-page"]}>
      <h1 className={styles["login-headline"]}>Admin Access</h1>
      <h5 className={styles["login-sub"]}>
        Hello! Sign in with your username or email
      </h5>
      <form style={{ width: "100%" }}>
        <div className={styles["login-cred-div"]}>
          <div className={styles["login-cred-input-div"]}>
            <label htmlFor={styles["name"]}>Username</label>
            <input
              className={styles["login-cred-input"]}
              type="text"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles["login-cred-input-div"]}>
            <label htmlFor="password">Password</label>
            <input
              className={styles["login-cred-input"]}
              type="text"
              name="password"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles["login-other-div"]}>
          <div className={styles["login-remember-me-div"]}>
            <input
              className={styles["login-remember-me-checkbox"]}
              type="checkbox"
              name="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <p className={styles["login-forgot-p"]}>Forgot password?</p>
        </div>
        <div className={styles["login-submit-btn-div"]}>
          <button
            className={styles["login-submit-btn"]}
            type="submit"
            onClick={handleLoginSubmit}
          >
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    adminAccess: state.admin.adminAccess,
    isLoading: state.admin.isLoading,
  };
};

export default connect(mapStateToProps, { adminLogin })(Login);
