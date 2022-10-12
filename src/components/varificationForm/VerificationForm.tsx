import {
  Button,
  FormStyled,
  InfoText,
  Input,
  ResendCode,
  Title,
} from "./VerificationForm.styled";

const VerificationForm: React.FC = () => {
  return (
    <FormStyled>
      <Title>What’s the code?</Title>
      <InfoText>
        Enter the code sent to <b>+1 123-456-7890</b>
      </InfoText>
      <Input />
      <ResendCode type="button">Resend code</ResendCode>
      <Button>Next</Button>
    </FormStyled>
  );
};

export default VerificationForm;
