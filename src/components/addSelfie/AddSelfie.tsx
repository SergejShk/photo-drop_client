import {
  Avatar,
  BtnAddAvatar,
  Text,
  Title,
  Wrapper,
  WrapperAvatar,
} from "./AddSelfie.styled";
import { AiFillPlusCircle } from "react-icons/ai";
import avatar from "../../assets/avatar.png";

const AddSelfie: React.FC = () => {
  return (
    <Wrapper>
      <Title>Add a selfie</Title>
      <Text>A selfie allows your photos to be synced with your account.</Text>
      <WrapperAvatar>
        <Avatar src={avatar} alt="avatar" />
        <BtnAddAvatar>
          <AiFillPlusCircle />
        </BtnAddAvatar>
      </WrapperAvatar>
    </Wrapper>
  );
};

export default AddSelfie;
