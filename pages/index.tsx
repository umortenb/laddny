import { useContext, useState } from 'react';
import { AuthContext } from '../components/auth/AuthContextProvider';

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);

  return (
    <>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => auth.loginUser(email, password)}>Login</button>
      <button onClick={() => auth.logoutUser()}>Logout</button>
      {auth.user ? (
        <div>
          {JSON.stringify(auth.user)}
        </div>
      ) : null}
    </>
  );
}

export default HomePage;
