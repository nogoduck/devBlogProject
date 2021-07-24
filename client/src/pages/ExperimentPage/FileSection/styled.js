import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  user-select: text;
`;

export const Table1 = styled.div`
  flex: 1;
`;

export const Table2 = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.div`
  position: relative;
  margin-bottom: 4px;
  border: 2px dashed red;

  & > span {
    position: absolute;
    color: green;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    padding: 0 4px 0 0;
  }
  & > span::before {
    content: "OUTPUT";
    background-color: #000;
    color: #fff;
    font-size: 12px;
    padding: 0 4px;
  }
  & > img {
  }
`;

export const ImageTag = styled.span`
  content: "OUTPUT";
  background-color: #000;
  color: #fff;
  font-size: 12px;
  position: absolute;
  padding: 0 4px;
`;
