import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.lineHeights.title};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 14px;
`;

export const InfoText = styled.b`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.secondary};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: calc(100% - 26px);
  background-color: ${(p) => p.theme.colors.backgroundInput};
  border: ${(p) => p.theme.borders.normal};
  border-radius: 10px;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.31;
  display: inline-flex;
  align-items: center;
  padding: 14px 13px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 20px;
`;

export const ResendCode = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.colors.accent};
  border: none;
  text-align: start;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.secondary};
  margin-bottom: 20px;
`;

export const Button = styled.button`
  min-width: 345px;
  cursor: pointer;
  background-color: ${(p) =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.accent};
  border-radius: 50px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.white};
  padding: 14px 20px;
  margin-bottom: 20px;
  border: none;
`;
