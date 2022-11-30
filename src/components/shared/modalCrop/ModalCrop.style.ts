import styled from "styled-components";

export const BackdropCrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 400ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 15;

  @media screen and (min-width: 1440px) {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 30;

  @media screen and (min-width: 1440px) {
    top: 97px;
    left: 50%;
    transform: translatex(-50%);
    width: 379px;
    height: 653px;
    border-radius: 20px;
    overflow: hidden;
    background-color: ${(p) => p.theme.colors.primary};
  }
`;