import { Link } from "react-router-dom";
import { formatNameAlbum } from "../../hooks/formatNameAlbum";
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
  return (
    <WrapperAlbums>
      <TitleAlbums>Albums</TitleAlbums>

      <ListAlbums>
        {albums.map(({ cover, location, id }) => (
          <ItemAlbums key={id}>
            <Link to={`/album/${id}`}>
              <Album src={cover} alt={location} />
              <NameAlbum>{formatNameAlbum(location, 18)}</NameAlbum>
            </Link>
          </ItemAlbums>
        ))}
      </ListAlbums>
    </WrapperAlbums>
  );
};

export default AlbumsList;
