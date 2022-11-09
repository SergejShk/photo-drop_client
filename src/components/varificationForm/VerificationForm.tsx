import { useState } from "react";
import AuthCode from "react-auth-code-input";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logInThunk, verificationThunk } from "../../redux/auth/authOperations";
import {
  getErrorStore,
  getNumber,
  isLoadingStore,
} from "../../redux/auth/authSelectors";
import {
  Button,
  ErrorText,
  FormStyled,
  InfoText,
  Phone,
  ResendCode,
  Title,
} from "./VerificationForm.styled";

const VerificationForm: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const number = useAppSelector(getNumber);
  const isloading = useAppSelector(isLoadingStore);
  const isError = useAppSelector(getErrorStore);

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    setCode(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(verificationThunk({ number, code }));
  };

  const onClickResend = (e: React.MouseEvent) => {
    dispatch(logInThunk({ number }));
    setIsDisabled(true);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Title>What’s the code?</Title>
      <InfoText>
        Enter the code sent to <Phone>{number}</Phone>
      </InfoText>

      <AuthCode allowedCharacters="numeric" onChange={handleChange} />
      {isError && <ErrorText>Code is wrong</ErrorText>}

      <ResendCode type="button" disabled={isDisabled} onClick={onClickResend}>
        Resend code
      </ResendCode>

      <Button disabled={code.length < 6 || isloading ? true : false}>
        Next{isloading && <span className="loader"></span>}
      </Button>
    </FormStyled>
  );
};

export default VerificationForm;
