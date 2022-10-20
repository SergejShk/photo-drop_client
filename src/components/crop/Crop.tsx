import { useState } from "react";
import Cropper from "react-easy-crop";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addSelfieThunk } from "../../redux/user/userOperations";
import getCroppedImg from "../../utils/cropImage";
import {
  ButtonWrapper,
  CropWrapper,
  Button,
  Title,
  Text,
  BtnClose,
} from "./Crop.styled";
import sprite from "../../assets/sprite.svg";

interface IProps {
  photoURL: string;
  onSelectImage: (e: React.MouseEvent<HTMLElement>) => void;
  setOpenCrop: (boolean: boolean) => void;
  setPhotoURL?: (url: string) => void;
}

const Crop: React.FC<IProps> = ({
  photoURL,
  onSelectImage,
  setOpenCrop,
  setPhotoURL,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Object | null>(
    null
  );
  const [basePhoto] = useState(photoURL);

  const dispatch = useAppDispatch();

  const cropImage = async () => {
    try {
      const file = await getCroppedImg(photoURL, croppedAreaPixels);

      dispatch(addSelfieThunk(file));
    } catch (error) {
      console.log(error);
    }
  };

  const cropComplete = (
    croppedArea: Object,
    croppedAreaPixels: Object | null
  ) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onClose: React.MouseEventHandler<HTMLButtonElement> = () => {
    setPhotoURL && setPhotoURL(basePhoto);
    setOpenCrop(false);
  };

  return (
    <>
      <CropWrapper>
        <BtnClose onClick={onClose}>
          <svg>
            <use href={sprite + "#icon-close"} />
          </svg>
        </BtnClose>

        <Title>Take selfie</Title>
        <Text>Drag and zoom image to crop</Text>

        <Cropper
          image={photoURL}
          crop={crop}
          aspect={1}
          showGrid={false}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
        <ButtonWrapper>
          <Button type="button" onClick={onSelectImage}>
            Retake
          </Button>
          <Button type="button" className="btnSave" onClick={cropImage}>
            Save
          </Button>
        </ButtonWrapper>
      </CropWrapper>
    </>
  );
};

export default Crop;
