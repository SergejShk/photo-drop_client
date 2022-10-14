import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { logInThunk } from "../../redux/auth/authOperations";

import {
  CallText,
  FormStyled,
  Title,
  Button,
  PolicyText,
} from "./AuthForm.styled";

const AuthForm: React.FC = () => {
  const [phone, setPhone] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleChange = (value: any) => {
    setPhone(`+${value}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(logInThunk({ number: phone }));
    setPhone("");
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Title>Let’s get started</Title>
      <CallText>Enter your phone number</CallText>
      <PhoneInput country={"us"} value={phone} onChange={handleChange} />

      <Button type="submit" disabled={Number(phone) < 5 ? true : false}>
        Create account
      </Button>
      <PolicyText>
        By proceeding, you consent to get WhatsApp or SMS messages, from
        PhotoDrop and its affiliates to the number provided. Text “STOP” to
        89203 to opt out.
      </PolicyText>
      <PolicyText>
        By continuing, you indicate that you have read and agree to our Terms of
        Use & Privacy Policy
      </PolicyText>
    </FormStyled>
  );
};

export default AuthForm;
