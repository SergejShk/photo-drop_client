import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { updateUserDataThunk } from "../../../../../store/user/userOperations";
import { Button, Form, Input, Title } from "./EditName.style";

interface IProps {
  curName: string;
}

const EditName: React.FC<IProps> = ({ curName }) => {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateUserDataThunk({ name }));

    navigate("/profile");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Your name</Title>

      <Input
        type="text"
        value={name}
        placeholder={curName}
        onChange={onChangeInput}
      />

      <Button type="submit" disabled={name.length < 3 && true}>
        Save
      </Button>
    </Form>
  );
};

export default EditName;
