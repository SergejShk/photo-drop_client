import styled from "styled-components";

export const WrapperAlbums = styled.div`
  position: relative;
  height: 160px;
  padding-top: 15px;

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    height: 287px;
  }

  & .mySwiper {
    position: absolute;
    top: 35px;
    left: calc(50% - 172.5px);
    width: calc(100vw - 15px - (100vw - 375px) / 2);
    height: 140px;

    @media screen and (min-width: 1440px) {
      top: 72px;
      left: 0;
      height: 255px;
      /* width: 1200px; */
      width: calc(100vw - 15px - (100vw - 1200px) / 2);
    }
  }

  & .swiper-backface-hidden .swiper-slide {
    width: 110px !important;
    height: 140px;
    margin-right: 5px;

    @media screen and (min-width: 1440px) {
      width: 200px !important;
      height: 255px;
    }
  }
`;

export const TitleAlbums = styled.h2`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 10px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 13px;
    margin-bottom: 19px;
  }
`;

export const AlbumImg = styled.img`
  display: block;
  width: 110px;
  height: 100%;
  border-radius: 20px;

  @media screen and (min-width: 1440px) {
    width: 200px !important;
    height: 255px;
  }
`;

export const NameContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 110px;
  height: 73px;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 44.34%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 133px;
  }
`;

export const NameAlbum = styled.p`
  margin-bottom: 20px;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 450;
  font-size: 12px;
  line-height: 9px;
  color: ${(p) => p.theme.colors.white};
  white-space: nowrap;

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
