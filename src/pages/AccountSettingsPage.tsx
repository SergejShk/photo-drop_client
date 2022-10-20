import AccountSettingsList from "../components/accountSettingsList/AccountSettingsList";
import Header from "../components/header/Header";

const AccountSettingsPage: React.FC = () => {
  return (
    <>
      <Header goBack />
      <AccountSettingsList />
    </>
  );
};

export default AccountSettingsPage;
