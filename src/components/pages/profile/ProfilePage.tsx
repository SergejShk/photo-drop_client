import ProfileEditList from "./components/profileEditList/ProfileEditList";
import ProfileInfo from "./components/profileInfo/ProfileInfo";

const ProfilePage: React.FC = () => {
  return (
    <>
      <ProfileInfo />
      <ProfileEditList />
    </>
  );
};

export default ProfilePage;
