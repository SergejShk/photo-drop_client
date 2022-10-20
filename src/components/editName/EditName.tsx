import { useState } from "react";
import CommonButton from "../commonButton/CommonButton";
import { Input, Title, Form } from "./EditName.style";

const EditName: React.FC = () => {
  const [name, setName] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Your name</Title>
      <Input type="text" value={name} onChange={onChangeInput} />
      <CommonButton type="submit" disabled={!name && true}>
        Save
      </CommonButton>
    </Form>
  );
};

export default EditName;
