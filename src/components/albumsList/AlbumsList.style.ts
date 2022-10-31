import styled from "styled-components";

export const WrapperAlbums = styled.div`
  padding-top: 15px;

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
  }
`;

export const TitleAlbums = styled.h2`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 10px;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 13px;
    margin-bottom: 19px;
  }
`;

export const ListAlbums = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ItemAlbums = styled.li`
  position: relative;
  width: 110px;
  height: 140px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 255px;
  }
`;

export const Album = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const NameAlbum = styled.p`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 450;
  font-size: 12px;
  line-height: 9px;
  color: ${(p) => p.theme.colors.white};
  white-space: nowrap;
`;
