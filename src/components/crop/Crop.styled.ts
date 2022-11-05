import styled from "styled-components";

export const BtnClose = styled.button`
  position: absolute;
  z-index: 10;
  top: 15px;
  left: 22px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    width: 30px;
    height: 30px;
  }
`;

export const Title = styled.h2`
  position: absolute;
  top: 23px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 13px;
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
  line-height: 11px;
  color: ${(p) => p.theme.colors.white};
`;

export const CropWrapper = styled.div`
  position: absolute;
  z-index: 30;
  top: 0;
  left: 0;
  background-color: ${(p) => p.theme.colors.primary};
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 100%;
  }

  & .reactEasyCrop_Container {
    top: 183px;
    left: 50%;
    transform: translateX(-50%);
    height: 285px;
    width: 285px;
    border-radius: 50%;
    z-index: 30;
  }

  & img {
    /* height: 285px; */
    /* max-width: 345px; */
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
  top: 563px;
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
  justify-content: center;
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 23px;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
  border: 1px solid #fff;
  border-radius: 50px;
  padding: 13px 10px 14px;

  &.btnSave {
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary};
  }
`;
