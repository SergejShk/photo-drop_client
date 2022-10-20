import Header from "../components/header/Header";
import ProfileEditList from "../components/profileEditList/ProfileEditList";
import ProfileInfo from "../components/profileInfo/ProfileInfo";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Header goBack />
      <ProfileInfo />
      <ProfileEditList />
    </>
  );
};

export default ProfilePage;
