import { useAppSelector } from "../../hooks/reduxHooks";
import {
  getSelfieStore,
  getUserNameStore,
} from "../../redux/user/userSelectors";
import {
  BtnEditAvatar,
  Container,
  ContainerSelfie,
  Text,
  WelcomeText,
} from "./ProfileInfo.styled";
import { useRef, useState } from "react";
import Crop from "../crop/Crop";
import sprite from "../../assets/sprite.svg";
import ModalCrop from "../modalCrop/ModalCrop";

const ProfileInfo: React.FC = () => {
  const userName = useAppSelector(getUserNameStore);
  const selfie = useAppSelector(getSelfieStore);
  const filePicker = useRef<HTMLInputElement>(null);

  const [, setSelectedFile] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState<string>(selfie);
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

  return (
    <>
      <Container>
        <WelcomeText>
          {userName ? `Welcome, ${userName}.` : "Welcome"}
        </WelcomeText>
        <Text>Your selfie</Text>

        <ContainerSelfie>
          <img src={selfie} alt="avatar" />

          <BtnEditAvatar type="button" onClick={() => setOpenCrop(true)}>
            <svg>
              <use href={sprite + "#icon-editor"} />
            </svg>
          </BtnEditAvatar>
        </ContainerSelfie>
      </Container>

      {openCrop && (
        <ModalCrop>
          <Crop {...{ photoURL, onSelectImage, setOpenCrop, setPhotoURL }} />
          <input
            className="hidden"
            type="file"
            ref={filePicker}
            accept="image/*,.png,.jpg,.jpeg"
            onChange={handleChange}
          />
        </ModalCrop>
      )}
    </>
  );
};

export default ProfileInfo;
