import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 136px;

  & .icon {
    position: absolute;
    z-index: 10;
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

  & .react-tel-input .selected-flag:hover,
  & .react-tel-input .selected-flag:focus {
    background-color: transparent;
  }

  & .react-tel-input .country-list {
    position: absolute;
    top: 30px;
    left: 2px;
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
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 19px;
`;

export const WrapperInput = styled.div`
  position: relative;
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
  font-family: ${(p) => p.theme.fonts.body};
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
