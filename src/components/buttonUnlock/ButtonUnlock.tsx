import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getPurcaseLinkThunk } from "../../redux/albums/albumsOperations";
import { getPurchaseLinkStore } from "../../redux/albums/albumsSelectors";
import { isLoadingStore } from "../../redux/auth/authSelectors";
import { BtnUnlock, BtnUnlockHeader } from "./ButtonUnlock.style";

interface IProps {
  forAlbumHeader?: boolean;
  albumId: string;
}

const ButtonUnlock: React.FC<IProps> = ({ forAlbumHeader, albumId }) => {
  const dispatch = useAppDispatch();
  const purchaseLink = useAppSelector(getPurchaseLinkStore);
  const isloading = useAppSelector(isLoadingStore);

  useEffect(() => {
    purchaseLink && window.location.assign(purchaseLink);
  }, [purchaseLink]);

  const onClickUnlock = (e: React.MouseEvent<HTMLElement>): void => {
    dispatch(getPurcaseLinkThunk(albumId));
  };

  return forAlbumHeader ? (
    <BtnUnlockHeader
      disabled={isloading ? true : false}
      onClick={onClickUnlock}
    >
      Unlock your photos{isloading && <span className="loader"></span>}
    </BtnUnlockHeader>
  ) : (
    <BtnUnlock disabled={isloading ? true : false} onClick={onClickUnlock}>
      Unlock your photos{isloading && <span className="loader"></span>}
    </BtnUnlock>
  );
};

export default ButtonUnlock;
