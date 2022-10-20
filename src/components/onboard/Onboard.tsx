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
import Crop from "../crop/Crop";

const AddSelfie: React.FC = () => {
  const filePicker = useRef<HTMLInputElement>(null);
  const [, setSelectedFile] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState<string>("");
  const [openCrop, setOpenCrop] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (file) {
      setSelectedFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };

  const onSelectImage = (e: React.MouseEvent<HTMLElement>) => {
    filePicker.current?.click();
  };

  return !openCrop ? (
    <Wrapper>
      <Title>Add a selfie</Title>
      <Text>A selfie allows your photos to be synced with your account.</Text>

      <WrapperAvatar>
        <Avatar src={avatar} alt="avatar" />

        <BtnAddAvatar type="button" onClick={onSelectImage}>
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
  ) : (
    <>
      <Crop {...{ photoURL, onSelectImage, setOpenCrop }} />
      <input
        className="hidden"
        type="file"
        ref={filePicker}
        accept="image/*,.png,.jpg,.jpeg"
        onChange={handleChange}
      />
    </>
  );
};

export default AddSelfie;
