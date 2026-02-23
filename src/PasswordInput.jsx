import { useState } from "react";
import pass from "../assets/pass.png"; // adjust path to your image

export default function PasswordInput() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8 || value.length > 16) {
      setError("Password must be 8 to 16 characters");
    } else {
      setError(""); // clear error when valid
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={pass} alt="password icon" style={{ width: "24px", height: "24px" }} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          style={{ flex: 1, padding: "8px", fontSize: "14px" }}
        />
      </div>
      {error && <span style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{error}</span>}
    </div>
  );
}