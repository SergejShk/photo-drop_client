import {
  AiOutlineCamera,
  AiOutlineFolderOpen,
  AiOutlinePicture,
} from "react-icons/ai";
import { BtnModal, Modal } from "./ModalSelfie.styled";

const ModalSelfie: React.FC = () => {
  return (
    <Modal>
      <BtnModal type="button">
        Photo Library
        <AiOutlinePicture />
      </BtnModal>
      <BtnModal type="button">
        Take Photo
        <AiOutlineCamera />
      </BtnModal>
      <BtnModal type="button">
        Choose File
        <AiOutlineFolderOpen />
      </BtnModal>
    </Modal>
  );
};

export default ModalSelfie;
