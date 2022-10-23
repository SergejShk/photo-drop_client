import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;

  @media screen and (min-width: 1440px) {
    padding-top: 178px;
  }

  & .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 17px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 14px;

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    line-height: 22px;
    margin-bottom: 29px;
  }
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 19px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 30px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 16px;
    margin-bottom: 28px;
  }
`;

export const WrapperAvatar = styled.div`
  position: relative;
  width: 181px;
  height: 181px;
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
`;

export const BtnAddAvatar = styled.button`
  position: absolute;
  z-index: 10;
  right: 0;
  bottom: 0;
  width: 43px;
  height: 43px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: ${(p) => p.theme.borders.none};
  border-radius: 50%;
`;

export const IconAddAvatar = styled.svg`
  width: 43px;
  height: 43px;
  padding: 0;
  fill: ${(p) => p.theme.colors.accent};

  & use {
    width: 42px;
    height: 42px;
  }
`;
