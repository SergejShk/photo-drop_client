import styled from "styled-components";

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 13px;
  color: ${(p) => p.theme.colors.primary};
  margin: 20px 0 16px;
  text-align: center;
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 21px;
`;

export const SubTitle = styled.h3`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.22;
  color: ${(p) => p.theme.colors.primary};
`;
