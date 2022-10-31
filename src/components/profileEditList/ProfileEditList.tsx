import {
  EditItem,
  EditList,
  TextItem,
  TitleItem,
} from "./ProfileEditList.styled";
import sprite from "../../assets/sprite.svg";
import { Link, useLocation } from "react-router-dom";
import { editUserItems } from "../../utils/settingsItems";

const ProfileEditList: React.FC = () => {
  const location = useLocation();

  return (
    <EditList>
      {editUserItems.map((el) => (
        <EditItem key={el.to}>
          <Link to={el.to} state={location}>
            <div>
              <TitleItem>{el.title}</TitleItem>
              <TextItem>{el.text}</TextItem>
            </div>
            <svg>
              <use href={sprite + "#icon-Back-Arrow"} />
            </svg>
          </Link>
        </EditItem>
      ))}
    </EditList>
  );
};

export default ProfileEditList;
