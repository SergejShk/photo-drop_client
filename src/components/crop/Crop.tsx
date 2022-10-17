import { useState } from "react";
import Cropper from "react-easy-crop";
import { prepareSelfieData, saveAvatar } from "../../services/userApi";
import getCroppedImg from "../../utils/cropImage";
import { ButtonWrapper, CropWrapper, Button } from "./Crop.styled";

interface IProps {
  photoURL: string;
  onSelectImage: (e: React.MouseEvent<HTMLElement>) => void;
  setPhotoURL: Function;
  setSelectedFile: Function;
}

const Crop: React.FC<IProps> = ({
  photoURL,
  onSelectImage,
  setPhotoURL,
  setSelectedFile,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Object | null>(
    null
  );

  const cropImage = async () => {
    try {
      // @ts-ignore
      const { file } = await getCroppedImg(photoURL, croppedAreaPixels);

      const avatar = new File([file], "avatar.jpg");
      const extension = avatar.name.split(".").reverse()[0];

      const preparedData = await prepareSelfieData({ extension });
   
      const res = await saveAvatar(preparedData, avatar);
   
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
        <Cropper
          image={photoURL}
          crop={crop}
          aspect={1}
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
