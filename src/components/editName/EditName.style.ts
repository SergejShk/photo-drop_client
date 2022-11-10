import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 167px;

  @media screen and (min-width: 1440px) {
    padding-top: 255px;
  }
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 13px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 18px;
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: ${(p) => p.theme.colors.backgroundInput};
  border: ${(p) => p.theme.borders.normal};
  border-radius: 10px;
  padding: 15px 13px 14px;
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 11px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 21px;

  @media screen and (min-width: 1440px) {
    padding: 15px 17px 14px;
    font-size: 18px;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  position: relative;
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
  margin-bottom: 20px;
  border: none;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 15px;
    padding: 17px 20px 18px;
  }
`;
