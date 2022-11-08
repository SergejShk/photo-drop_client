import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 136px;

  @media screen and (min-width: 1440px) {
    padding-top: 178px;
  }

  & .text {
    margin-bottom: 38px;
    letter-spacing: 0;
  }

  & .icon {
    position: absolute;
    z-index: 1;
    top: 17px;
    left: 44px;
    width: 14px;
    height: 7px;
    cursor: pointer;
  }

  & .react-tel-input {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 20px;
  }

  & .react-tel-input .flag-dropdown {
    position: static;
    width: 80px;
    height: 40px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    border: ${(p) => p.theme.borders.normal};
    border-radius: 10px;
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: 1.31;
    align-items: center;
    padding: 8px 32px 7px 5px;
    color: ${(p) => p.theme.colors.primary};
    margin-right: 10px;
    margin-bottom: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  & .react-tel-input .flag-dropdown.open {
    position: static;
    width: 80px;
    height: 40px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    border: ${(p) => p.theme.borders.normal};
    border-radius: 10px;
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: 1.31;
    align-items: center;
    padding: 8px 32px 7px 5px;
    color: ${(p) => p.theme.colors.primary};
    margin-right: 10px;
    margin-bottom: 0;
    background-color: transparent;
  }

  & .react-tel-input .selected-flag {
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    width: 70px;
    height: 100%;
    padding: 0;
    border-radius: 10px;
    background-color: transparent;
  }

  & .react-tel-input .flag-dropdown.open .selected-flag {
    background-color: ${(p) => p.theme.colors.backgroundInput};
    border-radius: 10px;
  }

  & .react-tel-input .selected-flag .flag {
    zoom: 1.3;
    left: 10px;
  }

  & .react-tel-input .selected-flag .arrow {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  & .react-tel-input .form-control {
    position: static;
    min-width: 265px;
    height: 40px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    border: ${(p) => p.theme.borders.normal};
    border-radius: 10px;
    font-family: ${(p) => p.theme.fonts.body};
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: 11px;
    display: inline-flex;
    align-items: center;
    padding: 15px 13px 14px 13px;
    color: ${(p) => p.theme.colors.primary};
    margin-bottom: 20px;

    @media screen and (min-width: 1440px) {
      min-width: 341px;
      padding: 15px 17px 14px;
      font-size: 18px;
    }
  }

  & .react-tel-input .selected-flag:hover,
  & .react-tel-input .selected-flag:focus {
    background-color: transparent;
  }

  & .react-tel-input .country-list {
    position: absolute;
    top: -210px;
    left: 50%;
    transform: translateX(-50vw);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 56px);
    z-index: 50;
    box-shadow: none;
    font-family: ${(p) => p.theme.fonts.body};

    & li {
      width: 350px;
    }

    @media screen and (min-width: 1440px) {
      top: -273px;
      min-height: calc(100vh - 60px);
    }

    & .search {
      padding: 6px 0;

      & .search-emoji {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
      }

      & .search-box {
        width: 100%;
        margin: 0;
      }
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
    font-size: 30px;
    line-height: 22px;
    margin-bottom: 29px;
  }
`;

export const CallText = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 15px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 19px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 16px;
    margin-bottom: 18px;
  }
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
    left: 238px;
    color: #fff;
    font-size: 2px;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;

    @media screen and (min-width: 1440px) {
      left: 290px;
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

export const PolicyText = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 15.4px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondary};

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 19px;
  }

  & a {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 2px;
      height: 1px;
      width: 100%;
      background-color: #3300cc;
    }
  }
`;
