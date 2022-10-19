import styled from "styled-components";

export const ContainerLoader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoaderImg = styled.img`
  display: block;
  width: 75px;
  height: 75px;
  margin-bottom: 20px;
`;

export const LoaderText = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
`;
