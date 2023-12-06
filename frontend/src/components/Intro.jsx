import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Intro.css";

const LoginSignup = ({
  handleInputChange,
  handleRegisterSubmit,
  handleLoginSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginMode, setLoginMode] = useState(true);

  const toggleMode = () => {
    setLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{loginMode ? "Sign In" : "Sign Up"}</div>
        <div className="underline"></div>
      </div>

      {!loginMode && (
        <form method="post" onSubmit={handleSubmit(handleRegisterSubmit)}>
          <div className="inputs">
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={handleInputChange}
              {...register("userName", { required: true })}
            />
          </div>

          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              {...register("email", { required: true })}
            />
          </div>

          <div className="inputs">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
              {...register("password", { required: true })}
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      )}

      {loginMode && (
        <form method="post" onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              {...register("email", { required: true })}
            />
          </div>

          <div className="inputs">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
              {...register("password", { required: true })}
            />
          </div>

          <button type="submit">Sign In</button>
        </form>
      )}

      <div className="submit">
        <div className="forgot-password">
          {loginMode ? "Forgot Password? " : ""}
          <span>Click Here!</span>
        </div>
        <button type="button" onClick={toggleMode}>
          {loginMode ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
