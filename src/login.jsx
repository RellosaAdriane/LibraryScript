import React, { useState } from 'react';
import emailIcon from "./Components/email.png";
import passIcon from "./Components/password.png";
import './login.css';

const Login = () => {
  const [action, setAction] = useState("Login");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState("");

  // ================= EMAIL VALIDATION =================
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const allowedDomains = ["cvsu.edu.ph", "gmail.com", "yahoo.com"];
    const parts = value.split("@");

    if (parts.length !== 2) {
      setEmailError("");
      return;
    }

    const domain = parts[1].toLowerCase();

    if (!allowedDomains.includes(domain)) {
      setEmailError("Email must be cvsu.edu.ph, gmail.com or yahoo.com");
    } else {
      setEmailError("");
    }
  };

  // ================= PASSWORD VALIDATION =================
  const handlePasswordChange = (e) => {
    let value = e.target.value;

    // 🚫 Remove spaces automatically
    if (value.includes(" ")) {
      setPasswordError("Password cannot contain spaces");
      value = value.replace(/\s/g, "");
    }

    setPassword(value);

    if (value.length < 8 || value.length > 16) {
      setPasswordError("Password must be 8 to 16 characters");
    } else {
      setPasswordError("");
    }

    // Check match
    if (confirmPassword && value !== confirmPassword) {
      setConfirmError("Passwords do not match");
    } else {
      setConfirmError("");
    }
  };

  // ================= CONFIRM PASSWORD =================
  const handleConfirmChange = (e) => {
    let value = e.target.value;

    if (value.includes(" ")) {
      setConfirmError("Password cannot contain spaces");
      value = value.replace(/\s/g, "");
    }

    setConfirmPassword(value);

    if (password !== value) {
      setConfirmError("Passwords do not match");
    } else {
      setConfirmError("");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">

        {action === "Login" ? (
          <>
            {/* EMAIL */}
            <div className="input" style={{ flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img src={emailIcon} alt="email icon" />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              {emailError && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {emailError}
                </span>
              )}
            </div>

            {/* PASSWORD */}
            <div className="input" style={{ flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img src={passIcon} alt="password icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  maxLength={16}
                />
              </div>
              {passwordError && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {passwordError}
                </span>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="input">
              <input type="text" placeholder="First Name" />
            </div>

            <div className="input">
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="input">
              <label>Birthday:</label>
              <input type="date" />
            </div>

            <div className="input">
              <label>Gender:</label>
              <input type="radio" name="gender" value="male" /> Male
              <input type="radio" name="gender" value="female" /> Female
            </div>

            {/* EMAIL */}
            <div className="input" style={{ flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img src={emailIcon} alt="email icon" />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              {emailError && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {emailError}
                </span>
              )}
            </div>

            {/* PASSWORD */}
            <div className="input" style={{ flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img src={passIcon} alt="password icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  maxLength={16}
                />
              </div>
              {passwordError && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {passwordError}
                </span>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input" style={{ flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img src={passIcon} alt="confirm password icon" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmChange}
                  maxLength={16}
                />
              </div>
              {confirmError && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {confirmError}
                </span>
              )}
            </div>
          </>
        )}

      </div>

      {action === "Login" && (
        <div className="forgetpass">
          Forgot Password? <span>Click here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign up")}
        >
          Sign up
        </div>

        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;