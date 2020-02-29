import React from "react";

const SignUpForm = ({ classes }) => {
  return (
    <form className={`newacc-form signup ${classes}`}>
      <fieldset>
        <legend>Create an account</legend>
        <p>
          <label for="loginField_username">Username</label>
          <input type="text" name="username" id="loginField_username" />
        </p>
        <p>
          <label for="loginField_email">E-mail</label>
          <input type="email" name="email" id="loginField_email" />
        </p>
        <p>
          <label for="loginField_password">Password</label>
          <input type="password" name="password" id="loginField_password" />
        </p>
        <p>
          <label for="loginField_confirmPassword">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            id="loginField_confirmPassword"
          />
        </p>
        <button
          type="submit"
          className={`newacc-form-button button sharp short pink-light`}
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default SignUpForm;
