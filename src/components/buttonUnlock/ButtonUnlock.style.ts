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
  margin: 40px auto;
  min-width: 345px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 15px;
    margin: 100px auto 100px;
    padding: 17px 20px 18px;
    min-width: 300px;
  }
`;

export const BtnUnlockHeader = styled.button`
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 22px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 15px;
  color: ${(p) => p.theme.colors.accent};
  border: none;
  background-color: transparent;
  display: block;
  margin-left: auto;
  padding: 0;
`;
