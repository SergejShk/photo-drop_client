import { useMediaQuery } from "react-responsive";
import {
  ButtonFooter,
  CommonWrapperFooter,
  Container,
  IconClimateNeutral,
  IconLogo,
  TextFooter,
  TextInc,
  TextPrivacy,
  TextQuestions,
  TextTerms,
  Title,
  WrapperFooter,
} from "./Footer.style";
import sprite from "../../assets/sprite.svg";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });

  return isMobile ? (
    <CommonWrapperFooter>
      <WrapperFooter>
        <Title>PhotoDrop is brought to you by</Title>
        <IconLogo>
          <use href={sprite + "#icon-frameology"} />
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
          <use href={sprite + "#icon-climate-neutral"} />
        </IconClimateNeutral>

        <TextInc>© 2022 FOM Online Inc</TextInc>
        <TextTerms>Terms</TextTerms>
        <TextPrivacy>Privacy Party</TextPrivacy>
      </WrapperFooter>
    </CommonWrapperFooter>
  ) : (
    <CommonWrapperFooter>
      <WrapperFooter>
        <Container>
          <Title>PhotoDrop is brought to you by</Title>
          <IconLogo>
            <use href={sprite + "#icon-frameology"} />
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
            <use href={sprite + "#icon-climate-neutral"} />
          </IconClimateNeutral>

          <TextTerms>Terms of services</TextTerms>
          <TextPrivacy>Privacy Party</TextPrivacy>
        </Container>
      </WrapperFooter>
    </CommonWrapperFooter>
  );
};

export default Footer;
