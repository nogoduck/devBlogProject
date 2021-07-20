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

export const Lodding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  height: 100%;
`;

export const UpdateButton = styled.button`
  font-weight: 800;
  margin: 15px 0 40px 0;
  width: 84px;
  height: 32px;
  border-radius: 3px;
  background: linear-gradient(135deg, #ffdd59 0%, #ffa801 100%);
  border: 1px solid #ffa801;
  &:hover {
    background: #ffdd59;
    cursor: pointer;
  }
  &:active {
    background: #ffa801;
    box-shadow: 0px 0px 5px 1px #ffa801;
  }
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-direction: row;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin: 4px 0;
`;

export const Profile = styled.div`
  /* font-size: 8px; */
  display: flex;
  align-items: center;
`;

export const BoardInfo = styled.table`
  position: absolute;
  top: 90px;
  font-size: 15px;
  border-collapse: collapse;
  /* border: 1px solid black; */

  & td {
    border-right: 1px solid black;
    padding: 0 10px;
  }

  & td:first-child {
    padding-left: 0;
  }

  & td:last-child {
    border: none;
  }
`;
