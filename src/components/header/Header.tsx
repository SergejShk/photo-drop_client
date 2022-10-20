import {
  BottomLine,
  BtnGoBack,
  ContainerAvatar,
  HeaderStyled,
} from "./Header.styled";
import sprite from "../../assets/sprite.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { resetNumber } from "../../redux/auth/authSlice";

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

    navigate(-1);
  };

  return (
    <>
      <BottomLine />
      <HeaderStyled>
        {goBack && (
          <BtnGoBack onClick={onGoBack}>
            <svg className="iconGoBack">
              <use href={sprite + "#icon-Back-Arrow"} />
            </svg>
          </BtnGoBack>
        )}

        <svg className="logo">
          <use href={sprite + "#icon-Logo"} />
        </svg>

        {selfie && (
          <ContainerAvatar>
            <img src={selfie} alt="avatar" />
          </ContainerAvatar>
        )}
      </HeaderStyled>
    </>
  );
};

export default Header;
