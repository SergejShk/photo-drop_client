import styled from "styled-components";

export const EditList = styled.ul`
  min-width: 345px;
`;

export const EditItem = styled.li`
  background-color: ${(p) => p.theme.colors.white};
  outline: 1px solid #ceccb5;
  border-radius: 10px;
  min-width: 345px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  & a {
    width: calc(100% - 30px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px 9px 15px;
    border-radius: 10px;

    @media screen and (min-width: 1440px) {
      padding-top: 11px;
    }
  }

  & svg {
    width: 8px;
    height: 17px;
    transform: rotate(180deg);

    @media screen and (min-width: 1440px) {
      width: 10px;
      height: 21px;
    }
  }
`;

export const TitleItem = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 10px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const TextItem = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 11px;
  color: ${(p) => p.theme.colors.primary};

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 13px;
  }
`;
