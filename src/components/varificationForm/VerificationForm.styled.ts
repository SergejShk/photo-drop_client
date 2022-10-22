import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 106px;

  @media screen and (min-width: 1440px) {
    padding-top: 223px;
  }

  & div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;

    @media screen and (min-width: 1440px) {
      gap: 30px;
    }
  }

  & input {
    width: 45px;
    height: 40px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    color: ${(p) => p.theme.colors.primary};
    border: ${(p) => p.theme.borders.none};
    border-radius: 10px;
    font-family: ${(p) => p.theme.fonts.body};
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: ${(p) => p.theme.lineHeights.secondary};
    text-align: center;
    padding: 0;
    outline: none;

    @media screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 17px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 14px;

  @media screen and (min-width: 1440px) {
    line-height: 16px;
    margin-bottom: 29px;
  }
`;

export const InfoText = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 13px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 19px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 16px;
    margin-bottom: 18px;
  }
`;

export const Phone = styled.span`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 13px;
  color: ${(p) => p.theme.colors.primary};

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 16px;
  }
`;

export const ResendCode = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.colors.accent};
  border: ${(p) => p.theme.borders.none};
  text-align: start;
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 13px;
  margin-bottom: 19px;
  padding: 0;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 13px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  min-width: 345px;
  cursor: pointer;
  background-color: ${(p) =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.accent};
  border-radius: 50px;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.white};
  padding: 14px 20px 13px;
  border: none;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 15px;
    padding: 17px 20px 18px;
  }
`;
