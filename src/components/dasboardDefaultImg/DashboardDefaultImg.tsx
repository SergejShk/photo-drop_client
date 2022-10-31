import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Image,
  ImageBox,
  ImgWrapper,
  Title,
} from "./DashboardDefaultImg.style";
import imgMob1 from "../../assets/dashboard/mob/img-mob1.jpg";
import imgMob2 from "../../assets/dashboard/mob/img-mob2.jpg";
import imgDes1 from "../../assets/dashboard/desc/img-desc1.jpg";
import imgDes2 from "../../assets/dashboard/desc/img-desc2.jpg";
import imgDes3 from "../../assets/dashboard/desc/img-desc3.jpg";
import Footer from "../footer/Footer";

const DashboardDefaultImg: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });
  const isSwipe = useMediaQuery({ query: "(max-width:680px)" });

  return (
    <>
      <Title>Browse Art Prints</Title>
      <ImgWrapper>
        {isMobile ? (
          <>
            {isSwipe ? (
              <Swiper
                watchSlidesProgress={true}
                slidesPerView={2.05}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image src={imgMob1} alt="new-york city" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={imgMob2} alt="bridge" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={imgMob1} alt="new-york city" />
                </SwiperSlide>
              </Swiper>
            ) : (
              <ImageBox>
                <Image src={imgMob1} alt="new-york city" />
                <Image src={imgMob2} alt="bridge" />
                <Image src={imgMob1} alt="new-york city" />
              </ImageBox>
            )}
            <Footer />
          </>
        ) : (
          <>
            <Image src={imgDes1} alt="bridge" />
            <Image src={imgDes2} alt="new-york city" />
            <Image src={imgDes3} alt="city" />
          </>
        )}
      </ImgWrapper>
    </>
  );
};

export default DashboardDefaultImg;
