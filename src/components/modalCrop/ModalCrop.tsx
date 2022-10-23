import { BackdropCrop, Modal } from "./ModalCrop.style";

interface Iprops {
  children: React.ReactNode;
}

const ModalCrop: React.FC<Iprops> = ({ children }) => {
  return (
    <BackdropCrop>
      <Modal>{children}</Modal>
    </BackdropCrop>
  );
};

export default ModalCrop;
