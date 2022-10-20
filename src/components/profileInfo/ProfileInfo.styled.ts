import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 0;
`;

export const WelcomeText = styled.h2`
  margin: 0 auto 20px;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.22;
  color: ${(p) => p.theme.colors.primary};
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.secondary};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 13px;
`;

export const ContainerSelfie = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

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

  & svg {
    width: 100%;
    height: 100%;
    fill: ${(p) => p.theme.colors.accent};
  }
`;
