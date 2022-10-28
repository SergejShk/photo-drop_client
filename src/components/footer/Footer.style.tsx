import styled from "styled-components";

export const CommonWrapperFooter = styled.div`
  position: absolute;
  top: 635px;
  left: 0;
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    width: 100vw;
    top: 782px;
  }
`;

export const WrapperFooter = styled.div`
  max-width: 345px;
  padding: 60px 15px 134px;

  @media screen and (min-width: 1440px) {
    max-width: 791px;
    padding: 60px 0 40px;
    display: flex;
  }

  & .terms {
    display: block;
    font-family: ${(p) => p.theme.fonts.body};
    font-size: 16px;
    line-height: 11px;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.white};
    margin-bottom: 20px;

    @media screen and (min-width: 1440px) {
      font-size: 18px;
      line-height: 14px;
      margin-bottom: 19px;
    }
  }

  & .policy {
    display: block;
    font-family: ${(p) => p.theme.fonts.body};
    font-size: 16px;
    line-height: 12px;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.white};

    @media screen and (min-width: 1440px) {
      font-size: 18px;
      line-height: 12px;
    }
  }
`;

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: 700;
  font-size: 18px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 15px;
  margin-left: -1px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 17px;
    margin-bottom: 19px;
  }
`;

export const IconLogo = styled.svg`
  width: 150px;
  height: 25px;
  margin-bottom: 22px;

  @media screen and (min-width: 1440px) {
    width: 185px;
    height: 31px;
    margin-bottom: 20px;
  }

  & use {
    width: 150px;
    height: 24px;

    @media screen and (min-width: 1440px) {
      width: 185px;
      height: 30px;
    }
  }
`;

export const TextFooter = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-left: -1px;
  margin-bottom: 39px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 20.75px;
    margin-bottom: 29px;
  }
`;

export const ButtonFooter = styled.button`
  cursor: pointer;
  min-width: 345px;
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  padding: 14px 20px 13px;
  outline: 1px solid #ffffff;
  border: none;
  border-radius: 50px;
  background-color: transparent;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 60px;

  @media screen and (min-width: 1440px) {
    min-width: 300px;
    padding: 17px 20px 18px;
    font-size: 22px;
    line-height: 15px;
  }
`;

export const TextQuestions = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 16px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 30px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 12px;
    margin-bottom: 20px;
  }
`;

export const IconClimateNeutral = styled.svg`
  width: 101px;
  height: 40px;
  margin-bottom: 30px;

  & use {
    width: 100px;
    height: 40px;
  }
`;

export const TextInc = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 16px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 19px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 14px;
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  max-width: 420px;

  &:not(:last-child) {
    margin-right: 60px;
  }
`;
