import { useState } from "react";
import { login } from "../api";

const Login = ({ setUser, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!username) {
      setError("Missing Username");
      return;
    }

    if (!password) {
      setError("Missing Password");
      return;
    }

    const result = await login(username, password);

    if (result?.error) {
      setError(result.error.message);
      return;
    }

    if (!result.user.admin) {
      setError("Please use a valid administrator account");
    }

    setUser(result.user);
  };

  return (
    <div className="login-page">
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          id="user"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button">Login</button>
        <div className="error-container">
          {error && <p className="input-error">{error}</p>}
          {loginError && (
            <p className="input-error" style={{ textAlign: "center" }}>
              {loginError}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
