import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import {
  ButtonFooter,
  CommonWrapperFooter,
  Container,
  IconClimateNeutral,
  IconLogo,
  TextFooter,
  TextInc,
  TextQuestions,
  Title,
  WrapperFooter,
} from "./Footer.style";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });
  const location = useLocation();

  return isMobile ? (
    <CommonWrapperFooter>
      <WrapperFooter>
        <Title>PhotoDrop is brought to you by</Title>
        <IconLogo>
          <use href={"/assets/sprite.svg" + "#icon-frameology"} />
        </IconLogo>

        <TextFooter>
          Our mission is to help people connect with their memories. If you
          framing some of the photos from your experience, please consider using
          Frameology. It supports the photographers and makes PhotoDrop
          possible.
        </TextFooter>

        <ButtonFooter type="button" disabled>
          Frame a photo
        </ButtonFooter>

        <TextQuestions>
          Questions? Get in touch -{" "}
          <a href="mailto:hello@photodrop.me">hello@photodrop.me</a>
        </TextQuestions>

        <IconClimateNeutral>
          <use href={"/assets/sprite.svg" + "#icon-climate-neutral"} />
        </IconClimateNeutral>

        <TextInc>© 2022 FOM Online Inc</TextInc>
        <Link to="/terms" state={location} className="terms">
          Terms
        </Link>
        <Link to="/policy" state={location} className="policy">
          Privacy Party
        </Link>
      </WrapperFooter>
    </CommonWrapperFooter>
  ) : (
    <CommonWrapperFooter>
      <WrapperFooter>
        <Container>
          <Title>PhotoDrop is brought to you by</Title>
          <IconLogo>
            <use href={"/assets/sprite.svg" + "#icon-frameology"} />
          </IconLogo>

          <TextFooter>
            Our mission is to help people connect with their memories. If you
            framing some of the photos from your experience, please consider
            using Frameology. It supports the photographers and makes PhotoDrop
            possible.
          </TextFooter>

          <ButtonFooter type="button" disabled>
            Order photos
          </ButtonFooter>

          <TextInc>© 2022 FOM Online Inc</TextInc>
        </Container>

        <Container>
          <TextQuestions>
            Questions? Get in touch -{" "}
            <a href="mailto:hello@photodrop.me">hello@photodrop.me</a>
          </TextQuestions>

          <IconClimateNeutral>
            <use href={"/assets/sprite.svg" + "#icon-climate-neutral"} />
          </IconClimateNeutral>

          <Link to="/terms" state={location} className="terms">
            Terms of services
          </Link>
          <Link to="/policy" state={location} className="policy">
            Privacy Party
          </Link>
        </Container>
      </WrapperFooter>
    </CommonWrapperFooter>
  );
};

export default Footer;
