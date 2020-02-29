import React from "react";

const LoginForm = ({ classes }) => {
  return (
    <form className={`newacc-form login ${classes}`}>
      <fieldset>
        <legend>Enter your credentials</legend>
        <p>
          <label for="loginField_username">Username or e-mail</label>
          <input type="text" name="username" id="loginField_username" />
        </p>
        <p>
          <label for="loginField_password">Password</label>
          <input type="password" name="password" id="loginField_password" />
        </p>
        <button
          type="submit"
          className={`newacc-form-button button sharp short pink-light`}
        >
          Login
        </button>
      </fieldset>
    </form>
  );
};

export default LoginForm;
