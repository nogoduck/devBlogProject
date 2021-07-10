import styled from "styled-components";

export const Container = styled.table`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 24px;

  & a {
    color: #000;
  }
  & a:hover {
    color: #0984e3;
  }
`;

export const Table = styled.table`
  /* border: 1px solid black; */
  border-collapse: collapse;
  font-size: 14px;
  width: 100%;

  & tr {
    border-bottom: 1px solid #ced6e0;
  }
  & tr:last-child {
    border: none;
  }
  & tr,
  td,
  td {
    text-align: center;
  }
  & td:first-child {
    padding: 8px 50px 8px 8px;
    text-align: left;
  }
  & td:nth-child(2) {
    color: blue;
    padding: 10px auto;
  }
  & td:nth-child(3) {
    color: orange;
    padding: 10px auto;
  }
  & td:last-child {
    padding: 15px;
    text-align: right;
  }
`;

export const BoardHeader = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.div`
  font-size: 20px;
  margin: 4px 0;
`;

export const WriteButton = styled.button`
  color: #000;
  width: 84px;
  height: 32px;
`;

export const Lodding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  height: 100%;
`;
