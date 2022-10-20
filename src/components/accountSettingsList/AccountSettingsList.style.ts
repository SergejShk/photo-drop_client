import styled from "styled-components";

export const TitleList = styled.h2`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.22;
  color: ${(p) => p.theme.colors.primary};
  margin: 20px 0;
  text-align: center;
`;

export const List = styled.ul`
  width: 345px;
`;

export const Item = styled.li`
  background-color: ${(p) => p.theme.colors.white};
  border: 1px solid #ceccb5;
  border-radius: 10px;
  width: calc(100% - 2px);

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  & a {
    width: calc(100% - 33px);
    min-height: 46px;
    display: flex;
    align-items: center;
    padding: 10px 15px 9px 15px;
    border-radius: 10px;

    & div {
      min-height: 46px;
    }
  }

  & svg {
    margin-right: 10px;
  }

  & .iconArrow {
    width: 8px;
    height: 16px;
    transform: rotate(180deg);
    margin-left: auto;
    margin-right: 0;
  }
`;

export const TitleItem = styled.h3`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 10px;

  & span {
    color: #015b08;
  }
`;

export const TextItem = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
`;
