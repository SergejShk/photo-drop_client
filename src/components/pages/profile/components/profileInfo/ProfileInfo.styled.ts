import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 0 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
  }
`;

export const WelcomeText = styled.h2`
  margin: 0 auto 20px;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 12px;
  color: ${(p) => p.theme.colors.primary};

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    margin-bottom: 33px;
  }
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 14px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 13px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 13px;
    margin-bottom: 15px;
  }
`;

export const ContainerSelfie = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 150px;
  }

  & img {
    border-radius: 50%;
  }
`;

export const BtnEditAvatar = styled.button`
  position: absolute;
  z-index: 10;
  right: -18px;
  bottom: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: ${(p) => p.theme.borders.none};
  border-radius: 50%;

  @media screen and (min-width: 1440px) {
    width: 46px;
    height: 46px;
    right: -21px;
  }

  & svg {
    width: 100%;
    height: 100%;
    fill: ${(p) => p.theme.colors.accent};
  }
`;
