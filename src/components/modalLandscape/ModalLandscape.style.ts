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
