import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getPurcaseLinkThunk } from "../../redux/albums/albumsOperations";
import { getPurchaseLinkStore } from "../../redux/albums/albumsSelectors";
import { BtnUnlock, BtnUnlockHeader } from "./ButtonUnlock.style";

interface IProps {
  forAlbumHeader?: boolean;
  albumId: string;
}

const ButtonUnlock: React.FC<IProps> = ({ forAlbumHeader, albumId }) => {
  const dispatch = useAppDispatch();
  const purchaseLink = useAppSelector(getPurchaseLinkStore);

  useEffect(() => {
    purchaseLink && window.location.assign(purchaseLink);
  }, [purchaseLink]);

  const onClickUnlock = (e: React.MouseEvent<HTMLElement>): void => {
    dispatch(getPurcaseLinkThunk(albumId));
  };

  return forAlbumHeader ? (
    <BtnUnlockHeader onClick={onClickUnlock}>
      Unlock your photos
    </BtnUnlockHeader>
  ) : (
    <BtnUnlock onClick={onClickUnlock}>Unlock your photos</BtnUnlock>
  );
};

export default ButtonUnlock;
