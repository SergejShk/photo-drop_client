import { useEffect, useState } from "react";
import AuthCode from "react-auth-code-input";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logInThunk, verificationThunk } from "../../redux/auth/authOperations";
import { getNumber, isLoadingStore } from "../../redux/auth/authSelectors";
import {
  Button,
  FormStyled,
  InfoText,
  Phone,
  ResendCode,
  Title,
} from "./VerificationForm.styled";

const VerificationForm: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const number = useAppSelector(getNumber);
  const isloading = useAppSelector(isLoadingStore);

  const navigate = useNavigate();

  useEffect(() => {
    !number && navigate("/auth");
  }, [navigate, number]);

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    setCode(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(verificationThunk({ number, code }));
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Title>What’s the code?</Title>
      <InfoText>
        Enter the code sent to <Phone>{number}</Phone>
      </InfoText>

      <AuthCode allowedCharacters="numeric" onChange={handleChange} />

      <ResendCode
        type="button"
        onClick={() => dispatch(logInThunk({ number }))}
      >
        Resend code
      </ResendCode>

      <Button disabled={code.length < 6 || isloading ? true : false}>
        Next{isloading && <span className="loader"></span>}
      </Button>
    </FormStyled>
  );
};

export default VerificationForm;
