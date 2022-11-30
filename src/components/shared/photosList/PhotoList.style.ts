import styled from "styled-components";

export const TitlePhotos = styled.h3`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 10px;
  color: ${(p) => p.theme.colors.primary};
  margin: 40px 0 10px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 13px;
    margin: 100px 0 19px;
  }
`;

export const WrapperPhotos = styled.div`
  position: absolute;
  top: 290;
  left: 0;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1440px) {
    position: static;
    flex-direction: column;
  }
`;

export const ListPhotos = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ItemPhotos = styled.li`
  cursor: pointer;
  width: 33.333vw;
  height: 33.333vw;
  list-style: none;

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const ImagePhotos = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
