import styled from "styled-components";

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
  padding: 14px 20px 13px 20px;
  margin-bottom: 20px;
  border: none;
`;