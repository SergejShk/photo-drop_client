import styled from "styled-components";

export const Title = styled.h2`
  position: absolute;
  top: 23px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.white};
`;

export const Text = styled.p`
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: max-content;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.secondary};
  color: ${(p) => p.theme.colors.white};
`;

export const CropWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(p) => p.theme.colors.primary};
  width: 100vw;
  height: 100vh;

  & img {
    height: 285px;
    max-width: 345px;
  }

  & .reactEasyCrop_CropArea {
    height: 285px !important;
    width: 285px !important;
    border-radius: 50%;
  }
  & .reactEasyCrop_CropAreaGrid {
    height: 285px !important;
    width: 285px !important;
    border-radius: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  min-width: 169px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
  border: 1px solid #fff;
  border-radius: 50px;
`;
