import { AccentText, Container, Line, Text } from "./DashBoardNotify.styled";
import sprite from "../../assets/sprite.svg";

const DashboardNotify: React.FC = () => {
  return (
    <>
      <Container>
        <svg className="icoNotify" width="82" height="75">
          <use href={sprite + "#icon-notify"} />
        </svg>
        <AccentText>Your photos will drop soon.</AccentText>
        <Text>
          You will get a text message when they are ready. It can take up to 48
          hours.
        </Text>
      </Container>
      <Line />
    </>
  );
};

export default DashboardNotify;
