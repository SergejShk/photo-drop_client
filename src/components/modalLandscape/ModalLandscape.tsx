import { useMediaQuery } from "react-responsive";
import { nanoid } from "nanoid";
import {
  Backdrop,
  BtnClose,
  BtnSahre,
  BtnSeeFrame,
  IconDownload,
  IconShare,
  LinkDownload,
  Modal,
  PhotoImg,
  UnlockedContainer,
} from "./ModalLandscape.style";
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
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const downloadImg = () => {
    fetch(photoSrc, {
      method: "GET",
      headers: {
        "Content-Type": "image/jpeg",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${nanoid()}.jpg`);

        document.body.appendChild(link);

        link.click();
        link.parentNode?.removeChild(link);
      });
  };

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
      {!purchased ? (
        <ButtonUnlock
          forModal
          albumId={albumId}
          location={location}
          cover={cover}
        />
      ) : (
        <UnlockedContainer>
          <LinkDownload onClick={downloadImg}>
            <IconDownload>
              <use href={sprite + "#icon-download"} />
            </IconDownload>
          </LinkDownload>

          {!isDesktop && (
            <BtnSahre onClick={() => navigator.share({ url: photoSrc })}>
              <IconShare>
                <use href={sprite + "#icon-share"} />
              </IconShare>
            </BtnSahre>
          )}

          <BtnSeeFrame type="button" disabled>
            See in a frame
          </BtnSeeFrame>
        </UnlockedContainer>
      )}
    </Backdrop>
  );
};

export default ModalLandscape;
