import { BottomLine, BtnGoBack, HeaderStyled } from "./Header.styled";
import sprite from "../../assets/sprite.svg";
import { useNavigate } from "react-router-dom";

interface IProps {
  goBack?: boolean;
}

const Header: React.FC<IProps> = ({ goBack }) => {
  const navigate = useNavigate();

  const onGoBack: React.MouseEventHandler<HTMLButtonElement> = () =>
    navigate(-1);

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
      </HeaderStyled>
    </>
  );
};

export default Header;
