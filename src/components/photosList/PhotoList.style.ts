import styled from "styled-components";

export const TitlePhotos = styled.h3`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 10px;
  color: ${(p) => p.theme.colors.primary};
  margin: 40px 0 10px;
`;

export const WrapperPhotos = styled.div`
  position: absolute;
  top: 290;
  left: 0;
  width: 375px;
`;

export const ListPhotos = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemPhotos = styled.li`
  width: 125px;
  height: 125px;
`;

export const ImagePhotos = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;


