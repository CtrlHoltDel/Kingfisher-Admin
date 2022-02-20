import { useState } from "react";
import "./App.css";

import useLogin from "./hooks/useLogin";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  const { user, loginUser, logoutUser } = useLogin();
  const [error, setError] = useState(false);

  const generateError = (message, status) => {
    setError(`Error: ${message} || Status: ${status}`);
  };

  if (!user) return <Login setUser={loginUser} generalError={error} />;

  return (
    <div className="App">
      <Main user={user} logoutUser={logoutUser} generateError={generateError} />
    </div>
  );
}

export default App;
