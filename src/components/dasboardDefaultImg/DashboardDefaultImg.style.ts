import styled from "styled-components";

export const Title = styled.h2`
  position: relative;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 500;
  font-size: 22px;
  line-height: 14px;
  margin: 46px 0 21px;

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    line-height: 20px;
    margin: 0 0 20px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 216px;
  padding-bottom: 60px;

  @media screen and (min-width: 1440px) {
    display: flex;
    height: 255px;
    padding-bottom: 100px;
  }

  & .mySwiper {
    position: absolute;
    top: 0;
    left: 0;
    width: 360px;
    height: 216px;
  }

  & .swiper-backface-hidden .swiper-slide {
    width: 172px !important;
    height: 216px;
  }
`;

export const Image = styled.img`
  width: 167px;
  height: 100%;
  border-radius: 20px;

  @media screen and (min-width: 1440px) {
    width: 200px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
