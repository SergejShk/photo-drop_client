import styled from "styled-components";

export const CropWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #262626;
  width: 100vw;
  height: 100vh;

  & .reactEasyCrop_CropArea {
    border-radius: 50%;
  }
  & .reactEasyCrop_CropAreaGrid {
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
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
  border: 1px solid #fff;
  border-radius: 50px;
`;
