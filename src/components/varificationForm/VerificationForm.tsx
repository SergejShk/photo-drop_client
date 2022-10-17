import { useState } from "react";
import AuthCode from "react-auth-code-input";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logInThunk, verificationThunk } from "../../redux/auth/authOperations";
import { getNumber } from "../../redux/auth/authSelectors";
import {
  Button,
  FormStyled,
  InfoText,
  ResendCode,
  Title,
} from "./VerificationForm.styled";

const VerificationForm: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const number = useAppSelector(getNumber);

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    setCode(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(verificationThunk({ number, code }));
    setCode("");
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Title>What’s the code?</Title>
      <InfoText>
        Enter the code sent to <b>{number}</b>
      </InfoText>
      <AuthCode allowedCharacters="numeric" onChange={handleChange} />
      <ResendCode
        type="button"
        onClick={() => dispatch(logInThunk({ number }))}
      >
        Resend code
      </ResendCode>
      <Button disabled={code.length < 6 ? true : false}>Next</Button>
    </FormStyled>
  );
};

export default VerificationForm;
