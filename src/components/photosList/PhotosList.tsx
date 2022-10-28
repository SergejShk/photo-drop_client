import ButtonUnlock from "../buttonUnlock/ButtonUnlock";
import {
  ImagePhotos,
  ItemPhotos,
  ListPhotos,
  TitlePhotos,
  WrapperPhotos,
} from "./PhotoList.style";

interface IProps {
  allPhotos: {}[];
  isExistUnlock: boolean;
}

const PhotosList: React.FC<IProps> = ({ allPhotos, isExistUnlock }) => {
  return (
    <>
      <TitlePhotos>All photos</TitlePhotos>

      <WrapperPhotos>
        <ListPhotos>
          {allPhotos.map((photo: any) => (
            <ItemPhotos key={photo.thumbnail}>
              <ImagePhotos src={photo.thumbnail} alt="photo" />
            </ItemPhotos>
          ))}
        </ListPhotos>

        {isExistUnlock && <ButtonUnlock />}
      </WrapperPhotos>
    </>
  );
};

export default PhotosList;
