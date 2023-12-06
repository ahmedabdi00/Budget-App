import { useState } from "react";
import { Form } from "react-router-dom";
import "./Intro.css";

const LoginSignup = ({
  formData,
  handleInputChange,
  handleRegisterSubmit,
  handleLoginSubmit,
}) => {
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

      {/* Form for registration */}
      {!loginMode && (
        <Form method="post" onSubmit={handleRegisterSubmit}>
          <div className="inputs">
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData?.userName || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData?.password || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </Form>
      )}

      {/* Form for login */}
      {loginMode && (
        <Form method="post" onSubmit={handleLoginSubmit}>
          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData?.password || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Sign In</button>
        </Form>
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
