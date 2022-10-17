import styled from "styled-components";

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.22;
  color: ${(p) => p.theme.colors.primary};
  margin: 20px 0 16px;
  text-align: center;
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.secondary};
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 20px;
`;

