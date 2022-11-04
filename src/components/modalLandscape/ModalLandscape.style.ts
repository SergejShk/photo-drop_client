import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.primary};
  z-index: 10;
`;

export const BtnClose = styled.button`
  position: absolute;
  z-index: 20;
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

export const Modal = styled.div`
  position: absolute;
  z-index: 10;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: calc(100vh - 186px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    top: 0;
    height: 100vh;
  }
`;

export const PhotoImg = styled.img`
  max-height: 100%;
`;

export const UnlockedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 345px;
  height: 50px;
  margin: auto auto 30px;

  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: 30px;
    right: 40px;
    z-index: 15;
    margin: 0;
    width: 287px;
  }
`;

export const LinkDownload = styled.button`
  cursor: pointer;
  width: 58px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const IconDownload = styled.svg`
  width: 58px;
  height: 37px;
`;

export const BtnSahre = styled.button`
  cursor: pointer;
  width: 32px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const IconShare = styled.svg`
  width: 32px;
  height: 37px;
  fill: red;
`;

export const BtnSeeFrame = styled.button`
  cursor: pointer;
  min-width: 196px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 15px 17px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50px;
  color: #ffffff;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 500;
  font-size: 18px;
  line-height: 13px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media screen and (min-width: 1440px) {
    min-width: 200px;
    font-size: 22px;
    line-height: 17px;
    padding: 16px 15px 15px;
  }
`;
