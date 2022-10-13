import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  z-index: 11;
  left: -22px;
  bottom: -128px;
  width: 226px;
  background: ${(p) => p.theme.colors.backgroundInput};
  border-radius: 11px;
  overflow: hidden;
`;

export const BtnModal = styled.button`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.lineHeights.secondary};
  letter-spacing: 0.015em;
  color: #000000;
  padding: 10px 14px;
  border: ${(p) => p.theme.borders.none};

  &:not(:last-child) {
    border-bottom: 0.5px solid #aeaeae;
  }
`;
