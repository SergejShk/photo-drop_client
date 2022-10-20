import Header from "../components/header/Header";
import NotificationSettingsForm from "../components/notificationSettingsForm/NotificationSettingsForm";

const NotificationSettingsPage: React.FC = () => {
  return (
    <>
      <Header goBack />
      <NotificationSettingsForm />
    </>
  );
};

export default NotificationSettingsPage;
