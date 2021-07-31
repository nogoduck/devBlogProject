import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 24px;
  position: relative;
  overflow: hidden;

  /* width: 100%; */
  & hr {
    border: none;
    border-top: 1px solid #e8eaed;
    width: 90%;
    float: left;
  }
`;

export const GitHubLink = styled.div`
  & a {
    /* position: relative;
    display: flex;
    justify-content: center;
    align-items: center; */
  }
`;
export const BugSet = styled.div`
  position: relative;
`;
export const LogoSection = styled.div`
  position: relative;
  height: 42px;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 800;
  color: #000;
`;
export const Gap = styled.label`
  background-color: #e8eaed;
  width: 24px;
  height: 24px;
  position: absolute;
  top: -36px;
  right: 80px;
  transform: rotate(20deg);
  border-radius: 35px 52px 31px 46px;

  @media screen and (max-width: 1023px) {
    //tablet

    background-color: black;
    display: none;
  }
`;

export const ContentContainer = styled.label`
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 12%;
`;
export const Content = styled.label`
  font-size: 14px;
`;
