import styled from "styled-components";

export const BtnUnlock = styled.button`
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 23px;
  color: ${(p) => p.theme.colors.white};
  padding: 14px 20px 13px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 50px;
  border: none;
  display: block;
  margin: 40px auto 17px;
  min-width: 345px;
`;