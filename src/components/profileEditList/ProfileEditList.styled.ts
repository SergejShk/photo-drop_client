import styled from "styled-components";

export const EditList = styled.ul`
  width: 345px;
`;

export const EditItem = styled.li`
  background-color: ${(p) => p.theme.colors.white};
  border: 1px solid #ceccb5;
  border-radius: 10px;
  width: calc(100% - 2px);

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  & a {
    width: calc(100% - 33px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px 9px 15px;
    border-radius: 10px;
  }

  & svg {
    width: 8px;
    height: 16px;
    transform: rotate(180deg);
  }
`;

export const TitleItem = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 10px;
`;

export const TextItem = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
`;
