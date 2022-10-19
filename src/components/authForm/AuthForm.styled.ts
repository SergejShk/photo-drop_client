import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 136px;

  & .react-tel-input {
    position: static;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 20px;
  }

  & .react-tel-input .flag-dropdown {
    position: static;
    width: 70px;
    height: 40px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    border: ${(p) => p.theme.borders.normal};
    border-radius: 10px;
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: 1.31;
    align-items: center;
    padding: 8px 32px 7px 8px;
    color: ${(p) => p.theme.colors.primary};
    margin-right: 10px;
    margin-bottom: 0;
  }

  & .react-tel-input .form-control {
    position: static;
    width: 100%;
    height: 40px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    border: ${(p) => p.theme.borders.normal};
    border-radius: 10px;
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: ${(p) => p.theme.lineHeights.secondary};
    display: inline-flex;
    align-items: center;
    padding: 15px 13px 14px 13px;
    color: ${(p) => p.theme.colors.primary};
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.lineHeights.title};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 14px;
`;

export const CallText = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 19px;
`;

export const Button = styled.button`
  min-width: 345px;
  cursor: pointer;
  background-color: ${(p) =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.accent};
  border-radius: 50px;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.white};
  padding: 14px 20px 13px 20px;
  margin-bottom: 20px;
  border: none;
`;

export const PolicyText = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.secondary};

  &:not(:last-child) {
    margin-bottom: 38px;
  }

  & a {
    border-bottom: 1px solid #3300cc;
    margin-left: 3px;
  }
`;
