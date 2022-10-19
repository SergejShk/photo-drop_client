import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { logInThunk } from "../../redux/auth/authOperations";
import sprite from "../../assets/sprite.svg";
import "react-phone-input-2/lib/style.css";

import {
  CallText,
  FormStyled,
  Title,
  Button,
  PolicyText,
  WrapperInput,
} from "./AuthForm.styled";

const AuthForm: React.FC = () => {
  const [phone, setPhone] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (value: any) => {
    setPhone(`+${value}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(logInThunk({ number: phone }));
    setPhone("");
    navigate("/verification");
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Title>Let’s get started</Title>
      <CallText>Enter your phone number</CallText>

      <WrapperInput>
        <PhoneInput country={"us"} value={phone} onChange={handleChange} />
        <svg className="icon">
          <use href={sprite + "#icon-arrow-bottom"} />
        </svg>
      </WrapperInput>

      <Button type="submit" disabled={phone.length < 8 ? true : false}>
        Create account
      </Button>

      <PolicyText>
        By proceeding, you consent to get WhatsApp or SMS messages, from
        PhotoDrop and its affiliates to the number provided. Text “STOP” to
        89203 to opt out.
      </PolicyText>

      <PolicyText>
        By continuing, you indicate that you have read and agree to our
        <Link to="/terms">Terms of Use</Link> &
        <Link to="/policy">Privacy Policy</Link>
      </PolicyText>
    </FormStyled>
  );
};

export default AuthForm;
