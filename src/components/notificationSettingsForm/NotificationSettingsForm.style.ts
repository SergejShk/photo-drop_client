import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 41px;
  }
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 14px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 25px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 36px;
    font-size: 22px;
    line-height: 12px;
  }
`;

export const Label = styled.label`
  position: relative;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 10px;
  color: ${(p) => p.theme.colors.primary};
  padding-left: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 14px;
    margin-bottom: 16px;
    padding-left: 28px;
  }

  & .customCheckbox {
    position: absolute;
    top: -6px;
    left: 0;
    fill: transparent;
    cursor: pointer;
    border: 1px solid #e3e0d8;
    border-radius: 5px;

    @media screen and (min-width: 1440px) {
      top: -3px;
      left: -2px;
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + .customCheckbox {
    fill: ${(p) => p.theme.colors.accent};
    border: 1px solid ${(p) => p.theme.colors.accent};
  }
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 16px;
  color: ${(p) => p.theme.colors.secondary};
  padding-left: 30px;
  margin-top: -6px;
  margin-bottom: 39px;

  @media screen and (min-width: 1440px) {
    margin-top: -3px;
    font-size: 16px;
    line-height: 17px;
    padding-left: 28px;
  }
`;
