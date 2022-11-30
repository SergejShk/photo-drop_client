import { Link, useLocation } from "react-router-dom";
import { editUserItems } from "../../../../../utils/settingsItems";
import {
  EditItem,
  EditList,
  TextItem,
  TitleItem,
} from "./ProfileEditList.styled";

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
              <use href={"/assets/sprite.svg" + "#icon-Back-Arrow"} />
            </svg>
          </Link>
        </EditItem>
      ))}
    </EditList>
  );
};

export default ProfileEditList;
