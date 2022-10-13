import { useState } from "react";
import {
  Avatar,
  BtnAddAvatar,
  Text,
  Title,
  Wrapper,
  WrapperAvatar,
} from "./AddSelfie.styled";

import avatar from "../../assets/avatar.png";
import { AiFillPlusCircle } from "react-icons/ai";
import ModalSelfie from "../modalSelfie/ModalSelfie";

const AddSelfie: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsModal(true);
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
        {isModal && <ModalSelfie />}
      </WrapperAvatar>
    </Wrapper>
  );
};

export default AddSelfie;
