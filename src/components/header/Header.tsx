import moment from "moment";
import { useMediaQuery } from "react-responsive";
import {
  BtnGoBack,
  ContainerAlbumDescr,
  ContainerAvatar,
  DescrAccent,
  DescrAlbum,
  HeaderStyled,
  IconGoBack,
  LinkLogo,
  TitleAlbum,
} from "./Header.styled";
import sprite from "../../assets/sprite.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { resetAccessToken, resetNumber } from "../../redux/auth/authSlice";
import { Album } from "../../types/albumsType";
import { formatNameAlbum } from "../../hooks/formatNameAlbum";
import ButtonUnlock from "../buttonUnlock/ButtonUnlock";

interface IProps {
  goBack?: boolean;
  selfie?: string;
  album?: Album;
}

const Header: React.FC<IProps> = ({ goBack, selfie, album }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const onGoBack: React.MouseEventHandler<HTMLButtonElement> = () => {
    location.pathname === "/verification" && dispatch(resetNumber(""));
    location.pathname === "/onboard" && dispatch(resetAccessToken(""));

    navigate(location.state ?? "/");
  };

  const normalizedDate = moment(album?.date).format("ll");
  const isDeskSuccess = location.pathname === "/payment_success" && isDesktop;

  return (
    <>
      {!album ? (
        <HeaderStyled>
          {goBack && (
            <BtnGoBack onClick={onGoBack}>
              <IconGoBack>
                <use href={sprite + "#icon-Back-Arrow"} />
              </IconGoBack>
            </BtnGoBack>
          )}

          <LinkLogo to="/auth">
            <svg className="logo">
              <use href={sprite + "#icon-Logo"} />
            </svg>
          </LinkLogo>

          {selfie && !isDeskSuccess && (
            <ContainerAvatar>
              <Link to="/profile" state={location}>
                <img src={selfie} alt="avatar" />
              </Link>
            </ContainerAvatar>
          )}
        </HeaderStyled>
      ) : (
        <HeaderStyled className="albumHeader">
          <ContainerAlbumDescr>
            <BtnGoBack onClick={onGoBack}>
              <IconGoBack>
                <use href={sprite + "#icon-Back-Arrow"} />
              </IconGoBack>
            </BtnGoBack>

            <TitleAlbum>{formatNameAlbum(album.location, 23)}</TitleAlbum>

            <DescrAlbum>
              {normalizedDate} •{" "}
              <DescrAccent>{album.photos.length} photos</DescrAccent>
            </DescrAlbum>

            {isDesktop && !album.purchased && (
              <ButtonUnlock
                forAlbumHeader
                albumId={album.id}
                location={album.location}
                cover={album.cover}
              />
            )}
          </ContainerAlbumDescr>
        </HeaderStyled>
      )}
    </>
  );
};

export default Header;
