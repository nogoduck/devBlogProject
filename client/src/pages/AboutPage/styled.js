import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & hr {
    width: 100%;
  }
  & ul {
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px 32px 4px 32px;
  }

  & li {
    list-style: decimal;
    margin-bottom: 4px;
  }
`;

export const Input = styled.input`
  width: 391px;
  padding: 5px 0px 5px 7px;
  font-size: 20px;
  border-radius: 3px;
  border: 1px solid #c3cfe0;
  transition: 0.3s;
  /* margin-top: 4px; */
  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const Label = styled.label`
  padding: 7px;
  font-size: 18px;
  font-weight: 800;
  color: #000;
  position: relative;
  display: inline-block;
  top: -8px;
`;

export const SubmitButton = styled.button`
  float: right;
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #cce6ff;
  border: 1px solid #c3cfe0;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 1px #1e90ff inset;
  }
  &:active {
    background: #1e90ff;
    color: #fff;
  }
`;

export const CancelButton = styled.button`
  float: right;
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #ffe3de;
  border: 1px solid #c3cfe0;
  transition: 0.1s;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 1px #ff6348 inset;
  }
  &:active {
    background: #ff6348;
    color: #fff;
  }
`;
