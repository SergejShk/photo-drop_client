import { useMediaQuery } from "react-responsive";
import {
  AccentText,
  Container,
  Icon,
  Line,
  Text,
} from "./DashBoardNotify.styled";
import sprite from "../../assets/sprite.svg";

const DashboardNotify: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });

  return (
    <>
      <Container>
        <Icon className="icoNotify" width="82" height="75">
          <use href={sprite + "#icon-notify"} />
        </Icon>
        <AccentText>Your photos will drop soon.</AccentText>
        <Text>
          You will get a text message when they are ready. It can take up to 48
          hours.
        </Text>
      </Container>
      {isMobile && <Line />}
    </>
  );
};

export default DashboardNotify;
