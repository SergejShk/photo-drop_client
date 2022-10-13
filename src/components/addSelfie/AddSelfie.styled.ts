import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 55px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.lineHeights.title};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 14px;
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 30px;
`;

export const WrapperAvatar = styled.div`
  position: relative;
  width: 181px;
  height: 181px;
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
`;

export const BtnAddAvatar = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 42px;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: ${(p) => p.theme.borders.none};
  border-radius: 50%;

  & svg {
    width: 100%;
    height: 100%;
    fill: ${(p) => p.theme.colors.accent};
  }
`;
