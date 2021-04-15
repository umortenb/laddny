import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface FormTextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

const StyledInput = styled.div`
  position: relative;
  width: 240px;

  label {
    position: absolute;
    top: 20px;
    left: 2px;
    pointer-events: none;
    transition: all 0.3s;
    font-size: 1rem;
    color: ${(props) => props.theme.accentColor[800]};
  }

  input {
    border: none;
    width: 100%;
    padding: 20px 2px 8px 2px;
    border-bottom: 1px solid black;
    background: transparent;
    transition: all 0.3s;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.accentColor[600]};
    }

    &:focus + label,
    &.filled + label {
      top: 0;
      font-size: 0.75rem;
    }

    &:focus + label {
      color: ${(props) => props.theme.accentColor[600]};
    }
  }
`;

const FormTextInput: React.FC<FormTextInputProps> = ({
  label,
  value,
  ...restProps
}) => {
  return (
    <StyledInput>
      <input value={value} {...restProps} className={value ? "filled" : ""} />
      <label>{label}</label>
    </StyledInput>
  );
};

export default FormTextInput;
