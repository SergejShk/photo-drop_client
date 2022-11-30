import { nanoid } from "nanoid";
import { useMediaQuery } from "react-responsive";
import ButtonUnlock from "../buttonUnlock/ButtonUnlock";
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
      mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "image/jpeg",
        "Access-Control-Allow-Origin": "*",
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
          <use href={"/assets/sprite.svg" + "#icon-close"} />
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
              <use href={"/assets/sprite.svg" + "#icon-download"} />
            </IconDownload>
          </LinkDownload>

          {!isDesktop && (
            <BtnSahre onClick={() => navigator.share({ url: photoSrc })}>
              <IconShare>
                <use href={"/assets/sprite.svg" + "#icon-share"} />
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
