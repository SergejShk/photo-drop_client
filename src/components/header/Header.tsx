import {
  BtnGoBack,
  ContainerAvatar,
  HeaderStyled,
  IconGoBack,
} from "./Header.styled";
import sprite from "../../assets/sprite.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { resetAccessToken, resetNumber } from "../../redux/auth/authSlice";

interface IProps {
  goBack?: boolean;
  selfie?: string;
}

const Header: React.FC<IProps> = ({ goBack, selfie }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const onGoBack: React.MouseEventHandler<HTMLButtonElement> = () => {
    location.pathname === "/verification" && dispatch(resetNumber(""));
    location.pathname === "/onboard" && dispatch(resetAccessToken(""));

    navigate(location.state ?? "/");
  };

  return (
    <>
      <HeaderStyled>
        {goBack && (
          <BtnGoBack onClick={onGoBack}>
            <IconGoBack>
              <use href={sprite + "#icon-Back-Arrow"} />
            </IconGoBack>
          </BtnGoBack>
        )}

        <svg className="logo">
          <use href={sprite + "#icon-Logo"} />
        </svg>

        {selfie && (
          <ContainerAvatar>
            <Link to="/profile" state={location}>
              <img src={selfie} alt="avatar" />
            </Link>
          </ContainerAvatar>
        )}
      </HeaderStyled>
    </>
  );
};

export default Header;
