import "./App.css";

import useLogin from "./hooks/useLogin";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  const { user, loginUser, logoutUser, loginError, generateError } = useLogin();

  if (!user) return <Login setUser={loginUser} loginError={loginError} />;

  return (
    <div className="App">
      <Main user={user} logoutUser={logoutUser} generateError={generateError} />
    </div>
  );
}

export default App;
