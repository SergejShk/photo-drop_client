import React from "react";
import { Backdrop, BtnClose, Modal, PhotoImg } from "./ModalLandscape.style";
import sprite from "../../assets/sprite.svg";
import ButtonUnlock from "../buttonUnlock/ButtonUnlock";

interface IProps {
  toogleModal: () => void;
  albumId: string;
  purchased: boolean;
  photoSrc: string;
  location: string;
  cover: string;
}

const ModalLandscape: React.FC<IProps> = ({
  toogleModal,
  albumId,
  purchased,
  photoSrc,
  location,
  cover,
}) => {
  return (
    <Backdrop>
      <BtnClose onClick={toogleModal}>
        <svg>
          <use href={sprite + "#icon-close"} />
        </svg>
      </BtnClose>
      <Modal>
        <PhotoImg src={photoSrc} alt={location} />
      </Modal>
      {!purchased && (
        <ButtonUnlock
          forModal
          albumId={albumId}
          location={location}
          cover={cover}
        />
      )}
    </Backdrop>
  );
};

export default ModalLandscape;
