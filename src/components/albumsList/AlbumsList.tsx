import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { formatNameAlbum } from "../../hooks/formatNameAlbum";
import { Albums } from "../../types/albumsType";
import {
  AlbumImg,
  NameAlbum,
  NameContainer,
  TitleAlbums,
  WrapperAlbums,
} from "./AlbumsList.style";

interface IProps {
  albums: Albums;
}

const AlbumsList: React.FC<IProps> = ({ albums }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });

  return (
    <WrapperAlbums>
      <TitleAlbums>Albums</TitleAlbums>

      <Swiper
        watchSlidesProgress={false}
        slidesPerView={isMobile ? 3 : 5.85}
        className="mySwiper"
      >
        {albums.map(({ cover, location, id }) => (
          <SwiperSlide key={id}>
            <Link to={`/album/${id}`} className="albumLink">
              <AlbumImg src={cover} alt={location} />

              <NameContainer>
                <NameAlbum>{formatNameAlbum(location, 18)}</NameAlbum>
              </NameContainer>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </WrapperAlbums>
  );
};

export default AlbumsList;
