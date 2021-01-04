import { removeClientSetsFromDocument } from '@apollo/client/utilities';
import styled from 'styled-components';
import { FlexContainer } from './FlexContainer';

export const AuthFormContainer = styled(FlexContainer).attrs(props => ({
  direction: "column",
}))`
  width: 100%;

  h3 {
    margin-bottom: 16px;
  }

  input {
    margin-bottom: 8px;
  }

  button {
    margin-bottom: 8px;
    margin-top: 8px;
  }
`;