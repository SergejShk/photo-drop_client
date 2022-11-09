import styled from "styled-components";

export const WrapperPaySuccess = styled.div`
  padding-top: 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
  }

  & .linkToDashboard {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${(p) => p.theme.fonts.body};
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.accent};
    padding: 14px 20px 13px;
    border-radius: 50px;
    border: none;
    margin-top: 30px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    @media screen and (min-width: 1440px) {
      width: 310px;
      font-size: 22px;
      line-height: 15px;
      padding: 17px 20px 18px;
      margin: 40px auto 0;
    }
  }
`;

export const TitleText = styled.h2`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    line-height: 28px;
  }
`;

export const TextSuccess = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 18px;
  line-height: 18.5px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 19px;

  &.textLastChild {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 22.5px;
  }
`;

export const TextReceive = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 18px;
  line-height: 14px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  margin-top: 19px;
`;

export const ImgAlbum = styled.img`
  display: block;
  height: 200px;
  margin: 30px auto 0;
  border-radius: 20px;

  @media screen and (min-width: 1440px) {
    height: 250px;
    margin: 39px auto 0;
  }
`;
