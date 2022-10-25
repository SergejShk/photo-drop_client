import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateUserDataThunk } from "../../redux/user/userOperations";
import CommonButton from "../commonButton/CommonButton";
import { Form, Input, Title } from "./EditEmail.style";

const EditEmail: React.FC = () => {
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateUserDataThunk({ email }));

    setEmail("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Your email</Title>

      <Input type="text" value={email} onChange={onChangeInput} />

      <CommonButton type="submit" disabled={email.length < 4 && true}>
        Save
      </CommonButton>
    </Form>
  );
};

export default EditEmail;
