import { Link } from "react-router-dom";
import {
  List,
  Item,
  TitleList,
  TitleItem,
  TextItem,
} from "./AccountSettingsList.style";
import sprite from "../../assets/sprite.svg";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  getUserEmailStore,
  // getUserPhoneStore,
} from "../../redux/user/userSelectors";

const AccountSettingsList: React.FC = () => {
  const email = useAppSelector(getUserEmailStore);
  // const phone = useAppSelector(getUserPhoneStore);

  return (
    <>
      <TitleList>Account settings</TitleList>
      <List>
        {/* <Item>
          <Link to="/phone-settings">
            <svg width="25" height="30">
              <use href={sprite + "#icon-Phone"} />
            </svg>
            <div>
              <TitleItem>
                Phone • <span>Verified</span>
              </TitleItem>
              <TextItem>{phone}</TextItem>
            </div>
            <svg className="iconArrow">
              <use href={sprite + "#icon-Back-Arrow"} />
            </svg>
          </Link>
        </Item> */}
        <Item>
          <Link to="/edit-email">
            <svg width="26" height="21">
              <use href={sprite + "#icon-Email"} />
            </svg>
            <div>
              <TitleItem>Email</TitleItem>
              <TextItem>{email}</TextItem>
            </div>
            <svg className="iconArrow">
              <use href={sprite + "#icon-Back-Arrow"} />
            </svg>
          </Link>
        </Item>
      </List>
    </>
  );
};

export default AccountSettingsList;
