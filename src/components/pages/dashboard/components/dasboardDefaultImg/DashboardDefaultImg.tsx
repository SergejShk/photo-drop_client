import { useMediaQuery } from "react-responsive";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../../../shared/footer/Footer";

import {
  Image,
  ImageBox,
  ImgWrapper,
  Title,
} from "./DashboardDefaultImg.style";

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
                  <Image
                    src="/assets/dashboard/mob/img-mob1.jpg"
                    alt="new-york city"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/assets/dashboard/mob/img-mob2.jpg"
                    alt="bridge"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/assets/dashboard/mob/img-mob3.jpg"
                    alt="new-york city"
                  />
                </SwiperSlide>
              </Swiper>
            ) : (
              <ImageBox>
                <Image
                  src="/assets/dashboard/mob/img-mob1.jpg"
                  alt="new-york city"
                />
                <Image src="/assets/dashboard/mob/img-mob2.jpg" alt="bridge" />
                <Image
                  src="/assets/dashboard/mob/img-mob3.jpg"
                  alt="new-york city"
                />
              </ImageBox>
            )}
            <Footer />
          </>
        ) : (
          <>
            <Image src="/assets/dashboard/desc/img-desc1.jpg" alt="bridge" />
            <Image
              src="/assets/dashboard/desc/img-desc2.jpg"
              alt="new-york city"
            />
            <Image src="/assets/dashboard/desc/img-desc3.jpg" alt="city" />
          </>
        )}
      </ImgWrapper>
    </>
  );
};

export default DashboardDefaultImg;
