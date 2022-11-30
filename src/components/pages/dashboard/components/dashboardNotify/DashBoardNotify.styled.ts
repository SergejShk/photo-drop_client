import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 41px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    padding: 40px 0 100px;
  }
`;

export const Icon = styled.svg`
  margin-left: 136px;
  width: 82px;
  height: 75px;

  @media screen and (min-width: 1440px) {
    margin-left: 559px;
    width: 109px;
    height: 100px;
  }
`;

export const AccentText = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 14px;
  color: ${(p) => p.theme.colors.primary};
  margin: 21px auto 16px;

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    line-height: 22px;
    margin: 30px auto 19px;
  }
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 23px;
  display: flex;
  color: ${(p) => p.theme.colors.primary};
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 16px;
    margin: 0 auto;
  }
`;

export const Line = styled.div`
  position: absolute;
  left: 0;
  top: 278px;
  height: 5px;
  width: 100vw;
  background-color: ${(p) => p.theme.colors.backgroundInput};
`;
