import { useState, useRef } from "react";
import avatar from "../../assets/avatar.png";
import {
  Avatar,
  BtnAddAvatar,
  IconAddAvatar,
  Text,
  Title,
  Wrapper,
  WrapperAvatar,
} from "./Onboard.styled";
import Crop from "../crop/Crop";
import sprite from "../../assets/sprite.svg";
import ModalCrop from "../modalCrop/ModalCrop";

const AddSelfie: React.FC = () => {
  const filePicker = useRef<HTMLInputElement>(null);
  const [, setSelectedFile] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState<string>("");
  const [openCrop, setOpenCrop] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (file) {
      setInputValue(e.target.value);
      setSelectedFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };

  const onSelectImage = (e: React.MouseEvent<HTMLElement>) => {
    filePicker.current?.click();
  };

  return (
    <>
      <Wrapper>
        <Title>Add a selfie</Title>
        <Text>A selfie allows your photos to be synced with your account.</Text>

        <WrapperAvatar>
          <Avatar src={avatar} alt="avatar" />

          <BtnAddAvatar type="button" onClick={onSelectImage}>
            <IconAddAvatar>
              <use href={sprite + "#icon-addAvatar"} />
            </IconAddAvatar>
          </BtnAddAvatar>

          <input
            className="hidden"
            type="file"
            value={inputValue}
            ref={filePicker}
            accept="image/*,.png,.jpg,.jpeg"
            onChange={handleChange}
          />
        </WrapperAvatar>
      </Wrapper>

      {openCrop && (
        <ModalCrop>
          <Crop
            {...{
              photoURL,
              onSelectImage,
              setOpenCrop,
              setPhotoURL,
              setInputValue,
            }}
          />
        </ModalCrop>
      )}
    </>
  );
};

export default AddSelfie;
