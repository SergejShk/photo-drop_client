import styled from "styled-components";

export const FormStyled = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 106px;

  @media screen and (min-width: 1440px) {
    padding-top: 223px;
  }

  & div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;

    @media screen and (min-width: 1440px) {
      gap: 30px;
    }
  }

  & input {
    width: 45px;
    height: 40px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    color: ${(p) => p.theme.colors.primary};
    border: ${(p) => p.theme.borders.none};
    border-radius: 10px;
    font-family: ${(p) => p.theme.fonts.body};
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: ${(p) => p.theme.lineHeights.secondary};
    text-align: center;
    padding: 0;
    outline: none;

    @media screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 17px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 14px;

  @media screen and (min-width: 1440px) {
    line-height: 16px;
    margin-bottom: 29px;
  }
`;

export const InfoText = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 13px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 19px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 16px;
    margin-bottom: 18px;
  }
`;

export const Phone = styled.span`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 13px;
  color: ${(p) => p.theme.colors.primary};

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 16px;
  }
`;

export const ResendCode = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.colors.accent};
  border: ${(p) => p.theme.borders.none};
  text-align: start;
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 13px;
  margin-bottom: 19px;
  padding: 0;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 13px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  position: relative;
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
  padding: 14px 20px 13px;
  border: none;

  & .loader,
  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: bblFadInOut 1.8s infinite ease-in-out;
  }
  & .loader {
    position: absolute;
    top: 23px;
    left: 202px;
    color: #fff;
    font-size: 2px;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;

    @media screen and (min-width: 1440px) {
      left: 247px;
    }
  }
  & .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 0;
  }
  & .loader:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  & .loader:after {
    left: 3.5em;
  }

  @keyframes bblFadInOut {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 15px;
    padding: 17px 20px 18px;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 212px;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 12px;
  line-height: 10px;
  color: #ff0000;

  @media screen and (min-width: 1440px) {
    top: 347px;
    font-size: 14px;
  }
`;
