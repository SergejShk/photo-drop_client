import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 166px;

  @media screen and (min-width: 1440px) {
    padding-top: 254px;
  }
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 15px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 19px;

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
    margin-bottom: 20px;
  }

  &:focus {
    outline: none;
  }
`;
