import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatNameAlbum } from "../../../../../hooks/formatNameAlbum";
import { Albums } from "../../../../../types/albumsType";
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
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });

  useEffect(() => {
    window.addEventListener("resize", () => setViewWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setViewWidth(window.innerWidth)
      );
  }, []);

  const slidesPerViewMob = (viewWidth / 2 - 187.5 + 360) / 115;
  const slidesPerViewDesc = (viewWidth / 2 - 730 + 1320) / 205;

  return (
    <WrapperAlbums>
      <TitleAlbums>Albums</TitleAlbums>

      <Swiper
        watchSlidesProgress={false}
        slidesPerView={isMobile ? slidesPerViewMob : slidesPerViewDesc}
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
