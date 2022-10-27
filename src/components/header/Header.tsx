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
  const { pathname } = useLocation();

  const onGoBack: React.MouseEventHandler<HTMLButtonElement> = () => {
    pathname === "/verification" && dispatch(resetNumber(""));
    pathname === "/onboard" && dispatch(resetAccessToken(""));

    navigate(-1);
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
            <Link to="/profile">
              <img src={selfie} alt="avatar" />
            </Link>
          </ContainerAvatar>
        )}
      </HeaderStyled>
    </>
  );
};

export default Header;
