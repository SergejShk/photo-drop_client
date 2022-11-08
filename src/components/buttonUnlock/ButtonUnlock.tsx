import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getPurcaseLinkThunk } from "../../redux/albums/albumsOperations";
import { getPurchaseLinkStore } from "../../redux/albums/albumsSelectors";
import { isLoadingStore } from "../../redux/auth/authSelectors";
import { BtnUnlock, BtnUnlockHeader } from "./ButtonUnlock.style";

interface IProps {
  forAlbumHeader?: boolean;
  forModal?: boolean;
  albumId: string;
  location: string;
  cover: string;
}

const ButtonUnlock: React.FC<IProps> = ({
  forAlbumHeader,
  forModal,
  albumId,
}) => {
  const dispatch = useAppDispatch();
  const purchaseLink = useAppSelector(getPurchaseLinkStore);
  const isloading = useAppSelector(isLoadingStore);

  useEffect(() => {
    purchaseLink && window.location.assign(purchaseLink);
  }, [purchaseLink]);

  const onClickUnlock = (e: React.MouseEvent<HTMLElement>): void => {
    localStorage.setItem("albumId", JSON.stringify(albumId));

    dispatch(getPurcaseLinkThunk(albumId));
  };

  if (forAlbumHeader) {
    return (
      <BtnUnlockHeader
        disabled={isloading ? true : false}
        onClick={onClickUnlock}
      >
        Unlock your photos
      </BtnUnlockHeader>
    );
  } else if (forModal) {
    return (
      <BtnUnlock
        className="forModal"
        disabled={isloading ? true : false}
        onClick={onClickUnlock}
      >
        Unlock photo{isloading && <span className="loader"></span>}
      </BtnUnlock>
    );
  } else {
    return (
      <BtnUnlock disabled={isloading ? true : false} onClick={onClickUnlock}>
        Unlock your photos{isloading && <span className="loader"></span>}
      </BtnUnlock>
    );
  }
};

export default ButtonUnlock;
