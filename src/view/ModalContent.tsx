import styled from "styled-components";

const shadow = "3px 3px 5px 0px rgba(0, 0, 0, 0.4)";

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 48px;
  z-index: 1001;

  // center horizontally and vertically
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // shadow
  -webkit-box-shadow: ${shadow}; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: ${shadow}; /* Firefox 3.5 - 3.6 */
  box-shadow: ${shadow}; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;
