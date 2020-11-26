import { useContext, useState } from 'react';
import Modal from '../../view/Modal'
import { AuthContext } from './AuthContextProvider';

export interface AuthModalProps {
  closeModal: () => void;
}
 
const AuthModal: React.FC<AuthModalProps> = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);

  return ( 
    <Modal closeModal={() => closeModal()}>
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
    </Modal>
  );
}
         
export default AuthModal;