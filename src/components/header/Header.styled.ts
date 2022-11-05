import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 19px 0 18px;
  border-bottom: 1px solid #f1f0ec;
  background-color: #fff;

  @media screen and (min-width: 1440px) {
    padding: 18px 0 17px;
  }

  &.albumHeader {
    padding: 11px 0 10px;

    @media screen and (min-width: 1440px) {
      padding: 23px 0 21px;
      height: calc(60px - 45px);
    }
  }

  .logo {
    width: 125px;
    height: 17px;

    @media screen and (min-width: 1440px) {
      width: 179px;
      height: 24px;
    }

    & use {
      width: 125px;
      height: 16px;

      @media screen and (min-width: 1440px) {
        width: 179px;
        height: 22px;
      }
    }
  }
`;

export const BtnGoBack = styled.button`
  position: absolute;
  left: 15px;
  top: 19px;
  width: 8px;
  height: 17px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    top: 20px;
    left: 40px;
    width: 10px;
    height: 20px;
  }
`;

export const IconGoBack = styled.svg`
  height: 17px;
  width: 10px;
  fill: ${(p) => p.theme.colors.primary};

  @media screen and (min-width: 1440px) {
    height: 21px;
    width: 10px;
  }

  & use {
    height: 16px;
    width: 9px;

    @media screen and (min-width: 1440px) {
      height: 20px;
      width: 10px;
    }
  }
`;

export const ContainerAvatar = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    top: 12px;
    right: 40px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const TitleAlbum = styled.h2`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: 18px;
  line-height: 13px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    margin: 0 38px 0 0;
  }
`;

export const ContainerAlbumDescr = styled.div`
  width: 299px;

  @media screen and (min-width: 1440px) {
    width: 1200px;
    display: flex;
    align-items: center;
    font-size: 22px;
  }
`;

export const DescrAlbum = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 14px;
  line-height: 10px;
  color: ${(p) => p.theme.colors.primary};

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const DescrAccent = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;
