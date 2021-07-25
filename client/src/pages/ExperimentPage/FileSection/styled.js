import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  user-select: text;
`;

export const Table1 = styled.div`
  width: 200px;
`;

export const Table2 = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.div`
  position: relative;
  margin: 2px;
  border: 2px dashed red;
  width: 150px;
  height: 150px;

  & > span {
    position: absolute;
    color: green;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    padding: 0 4px 0 0;
    max-width: 146px;
    max-height: 36px;
    overflow: scroll;
  }
  & > span::before {
    content: "OUTPUT";
    background-color: #000;
    color: #fff;
    font-size: 12px;
    padding: 0 4px;
    overflow: hidden;
  }
  & > img {
    border: none;
    outline: none;
  }
`;
