import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 345px;
  padding: 60px 15px 134px;
  background-color: ${(p) => p.theme.colors.primary};
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
`;

export const IconLogo = styled.svg`
  width: 150px;
  height: 25px;
  margin-bottom: 23px;

  & use {
    width: 150px;
    height: 24px;
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
`;

export const TextQuestions = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 16px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 30px;
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
`;

export const TextTerms = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 16px;
  line-height: 11px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 20px;
`;

export const TextPrivacy = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: 16px;
  line-height: 12px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
`;
