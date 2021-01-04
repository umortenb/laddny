import ReactDOM from 'react-dom'
import { ModalContent } from './ModalContent';
import { ModalOverlay } from './ModalOverlay'

export interface ModalProps {
  closeModal: () => void;
}
 
const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  return ( 
    ReactDOM.createPortal(
      <>
        <ModalOverlay onClick={() => closeModal()} />
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </>
    , document.body)
  );
}
 
export default Modal;