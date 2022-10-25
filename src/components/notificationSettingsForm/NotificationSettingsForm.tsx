import {
  Form,
  Input,
  Label,
  Text,
  Title,
} from "./NotificationSettingsForm.style";
import { notificationSettings } from "../../utils/settingsItems";
import { useState } from "react";
import { AllSettings } from "../../types/settingsTypes";
import CommonButton from "../commonButton/CommonButton";
import sprite from "../../assets/sprite.svg";
import { useNavigate } from "react-router-dom";

const NotificationSettingsForm: React.FC = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<AllSettings>(
    () =>
      //@ts-ignore
      JSON.parse(localStorage.getItem("notifySettings")) || notificationSettings
  );

  const updateStatus = (id: string) => {
    setSettings((prev) =>
      //@ts-ignore
      prev.map((el) => (el.id !== id ? el : { ...el, status: !el.status }))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("notifySettings", JSON.stringify(settings));
    navigate("/profile");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Notification settings</Title>

      {/* @ts-ignore */}
      {settings.map((el) => (
        <Label key={el.id}>
          <Input
            type="checkbox"
            name="status"
            checked={el.status}
            onChange={() => updateStatus(el.id)}
          />
          <svg className="customCheckbox" width="18" height="18">
            <use href={sprite + "#icon-checkbox"} />
          </svg>
          {el.label}
        </Label>
      ))}

      <Text>
        Stop marketing notifications. You will still receive transactional
        notifications for purchases and when new photos are available.
      </Text>

      <CommonButton type="submit">Save</CommonButton>
    </Form>
  );
};

export default NotificationSettingsForm;
