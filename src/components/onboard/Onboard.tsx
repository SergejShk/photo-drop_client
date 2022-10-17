import { useState, useRef } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import avatar from "../../assets/avatar.png";
import {
  Avatar,
  BtnAddAvatar,
  Text,
  Title,
  Wrapper,
  WrapperAvatar,
} from "./Onboard.styled";

const AddSelfie: React.FC = () => {
  const filePicker = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<FileList | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(filePicker.current);
    filePicker.current?.click();
    console.log(selectedFile);
  };

  return (
    <Wrapper>
      <Title>Add a selfie</Title>
      <Text>A selfie allows your photos to be synced with your account.</Text>
      <WrapperAvatar>
        <Avatar src={avatar} alt="avatar" />
        <BtnAddAvatar type="button" onClick={handleClick}>
          <AiFillPlusCircle />
        </BtnAddAvatar>

        <input
          className="hidden"
          type="file"
          ref={filePicker}
          accept="image/*,.png,.jpg,.jpeg"
          onChange={handleChange}
        />
      </WrapperAvatar>
    </Wrapper>
  );
};

export default AddSelfie;
