import styled from "styled-components";

export const TitleList = styled.h2`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 13px;
  color: ${(p) => p.theme.colors.primary};
  margin: 20px 0;
  text-align: center;

  @media screen and (min-width: 1440px) {
    margin: 41px 0 32px;
    font-size: 22px;
    line-height: 12px;
  }
`;

export const List = styled.ul`
  min-width: 345px;
`;

export const Item = styled.li`
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
    align-items: center;
    padding: 10px 15px 9px;
    border-radius: 10px;

    @media screen and (min-width: 1440px) {
      padding-top: 11px;
    }

    & div {
      min-height: 31px;

      @media screen and (min-width: 1440px) {
        min-height: 33px;
      }
    }
  }

  & svg {
    margin-right: 10px;
    fill: #262626;
  }

  & .iconArrow {
    width: 8px;
    height: 17px;
    transform: rotate(180deg);
    margin-left: auto;
    margin-right: 0;

    @media screen and (min-width: 1440px) {
      width: 10px;
      height: 21px;
    }
  }
`;

export const TitleItem = styled.h3`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 10px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }

  & span {
    color: #015b08;
  }
`;

export const TextItem = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: 14px;
  line-height: 11px;
  color: ${(p) => p.theme.colors.primary};

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 13px;
  }
`;
