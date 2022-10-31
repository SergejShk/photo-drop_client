import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateUserDataThunk } from "../../redux/user/userOperations";
import CommonButton from "../commonButton/CommonButton";
import { Input, Title, Form } from "./EditName.style";

const EditName: React.FC = () => {
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

      <Input type="text" value={name} onChange={onChangeInput} />

      <CommonButton type="submit" disabled={name.length < 3 && true}>
        Save
      </CommonButton>
    </Form>
  );
};

export default EditName;
