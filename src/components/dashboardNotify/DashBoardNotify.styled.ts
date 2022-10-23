import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 41px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccentText = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 14px;
  color: ${(p) => p.theme.colors.primary};
  margin-top: 21px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 18px;
  display: flex;
  color: ${(p) => p.theme.colors.primary};
  text-align: center;
`;

export const Line = styled.div`
  position: absolute;
  left: 0;
  top: 278px;
  height: 5px;
  width: 100vw;
  background-color: ${(p) => p.theme.colors.backgroundInput};
`;
