import { Albums } from "../../types/albumsType";
import {
  Album,
  ItemAlbums,
  ListAlbums,
  NameAlbum,
  TitleAlbums,
  WrapperAlbums,
} from "./AlbumsList.style";

interface IProps {
  albums: Albums;
}

const AlbumsList: React.FC<IProps> = ({ albums }) => {
  const formatNameAlbum = (name: string) => {
    const maxLength = 18;

    let result = "";

    if (name.length <= maxLength) {
      result = name;
    } else {
      result = name.slice(0, maxLength) + "...";
    }

    return result;
  };

  return (
    <WrapperAlbums>
      <TitleAlbums>Albums</TitleAlbums>

      <ListAlbums>
        {albums.map(({ cover, location }) => (
          <ItemAlbums key={cover}>
            <Album src={cover} alt={location} />
            <NameAlbum>{formatNameAlbum(location)}</NameAlbum>
          </ItemAlbums>
        ))}
      </ListAlbums>
    </WrapperAlbums>
  );
};

export default AlbumsList;
