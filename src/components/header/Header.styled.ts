import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: relative;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    width: 125px;
    height: 16px;
  }
`;

export const BottomLine = styled.div`
  position: absolute;
  left: 0;
  top: 55px;
  height: 1px;
  width: 100vw;
  background-color: #f1f0ec;
`;

export const BtnGoBack = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 16px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & .iconGoBack {
    height: 16px;
    width: 8px;
  }
`;
