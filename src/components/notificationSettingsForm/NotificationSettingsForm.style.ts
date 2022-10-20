import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.22;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 19px;
`;

export const Label = styled.label`
  position: relative;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.fontSizes.secondary};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 10px;
  padding-left: 30px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  & .customCheckbox {
    position: absolute;
    top: -1px;
    left: 0;
    fill: transparent;
    cursor: pointer;
    border: 1px solid #e3e0d8;
    border-radius: 5px;
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
  line-height: ${(p) => p.theme.fontSizes.body};
  color: ${(p) => p.theme.colors.secondary};
  padding-left: 30px;
  margin-bottom: 39px;
`;
