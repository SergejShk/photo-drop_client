import { useState } from "react";
import Cropper from "react-easy-crop";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addSelfieThunk } from "../../redux/user/userOperations";
import { prepareSelfieData } from "../../services/userApi";
import getCroppedImg from "../../utils/cropImage";
import { ButtonWrapper, CropWrapper, Button, Title, Text } from "./Crop.styled";

interface IProps {
  photoURL: string;
  onSelectImage: (e: React.MouseEvent<HTMLElement>) => void;
}

const Crop: React.FC<IProps> = ({ photoURL, onSelectImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Object | null>(
    null
  );

  const dispatch = useAppDispatch();

  const cropImage = async () => {
    try {
      const file = await getCroppedImg(photoURL, croppedAreaPixels);

      const { url } = await prepareSelfieData({ extension: "jpg" });

      dispatch(addSelfieThunk({ url, file }));
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

  return (
    <>
      <CropWrapper>
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
          <Button type="button" onClick={cropImage}>
            Save
          </Button>
        </ButtonWrapper>
      </CropWrapper>
    </>
  );
};

export default Crop;
