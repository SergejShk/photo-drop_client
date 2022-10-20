import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 167px;
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.22;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: calc(100% - 28px);
  background-color: ${(p) => p.theme.colors.backgroundInput};
  border: ${(p) => p.theme.borders.normal};
  border-radius: 10px;
  padding: 15px 13px 14px;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.secondary};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 21px;

  &:focus {
    outline-color: ${(p) => p.theme.colors.accent};
  }
`;
