import styled from "styled-components";

export const BtnUnlock = styled.button`
  position: relative;
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 23px;
  color: ${(p) => p.theme.colors.white};
  padding: 14px 20px 13px;
  background-color: ${(p) =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.accent};
  border-radius: 50px;
  border: none;
  display: block;
  margin: 40px auto;
  min-width: 345px;

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
    left: 255px;
    color: #fff;
    font-size: 2px;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;

    @media screen and (min-width: 1440px) {
      left: 250px;
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
    margin: 100px auto 100px;
    padding: 17px 20px 18px;
    min-width: 300px;
  }

  &.forModal {
    position: absolute;
    bottom: 30px;
    left: 50%;
    z-index: 20;
    transform: translateX(-50%);
    margin: 0;
    color: ${(p) => p.theme.colors.primary};
    background-color: ${(p) => p.theme.colors.white};

    & .loader {
      position: absolute;
      top: 22px;
      left: 231px;
      color: ${(p) => p.theme.colors.primary};
    }

    @media screen and (min-width: 1440px) {
      min-width: 200px;
      line-height: 17px;
      padding: 17px 20px 16px;

      & .loader {
        top: 28px;
        left: 165px;
        font-size: 1px;
      }
    }
  }
`;

export const BtnUnlockHeader = styled.button`
  position: relative;
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 22px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 15px;
  color: ${(p) => (p.disabled ? p.theme.colors.muted : p.theme.colors.accent)};
  border: none;
  background-color: transparent;
  display: block;
  margin-left: auto;
  padding: 0;

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
    top: 6px;
    left: 185px;
    color: ${(p) => p.theme.colors.accent};
    font-size: 2px;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
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
`;
