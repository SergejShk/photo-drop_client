import { BtnUnlock, BtnUnlockHeader } from "./ButtonUnlock.style";

interface IProps {
  forAlbumHeader?: boolean;
}

const ButtonUnlock: React.FC<IProps> = ({ forAlbumHeader }) => {
  return forAlbumHeader ? (
    <BtnUnlockHeader>Unlock your photos</BtnUnlockHeader>
  ) : (
    <BtnUnlock>Unlock your photos</BtnUnlock>
  );
};

export default ButtonUnlock;
