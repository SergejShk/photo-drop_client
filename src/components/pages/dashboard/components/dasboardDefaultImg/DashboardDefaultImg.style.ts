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
  position: absolute;
  top: 359px;
  left: 0;
  width: 100vw;
  height: 216px;
  padding-bottom: 60px;

  @media screen and (min-width: 1440px) {
    position: static;
    display: flex;
    width: 100%;
    height: 255px;
    padding-bottom: 100px;
  }

  & .mySwiper {
    position: absolute;
    top: 0;
    left: calc(50% - 172.5px);
    width: calc(100vw - 15px - (100vw - 375px) / 2);
    height: 216px;
  }

  & .swiper-backface-hidden .swiper-slide {
    width: 172px !important;
    height: 216px;
  }
`;

export const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 172.5px);
  display: flex;
  gap: 5px;
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
