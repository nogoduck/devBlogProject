import styled from "styled-components";

export const Container = styled.div``;

export const Lodding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  height: 100%;
`;

export const InputTitle = styled.input`
  font-size: 19px;
  font-weight: 800;
  border: none;
`;

export const InputDescription = styled.div`
  font-size: 16px;
  color: red;
`;

export const DeleteButton = styled.button`
  width: 300px;
  font-weight: 800;
  height: 30px;
  border-radius: 3px;
  background: #ff7675;
  border: 1px solid #7f8fa6;
  color: #fff;
  transition: 0.3s;
  float: right;
  /* position: absolute; */
  bottom: 35px;
  &:hover {
    background: #d63031;
    cursor: pointer;
  }
  &:active {
    background: #ff7675;
    box-shadow: 0px 0px 3px 1px #ea8685 inset;
    color: #fff;
  }
`;

export const UpdateButton = styled.button`
  font-weight: 800;
  margin: 15px 0 40px 0;
  width: 180px;
  height: 30px;
  border-radius: 3px;
  background: linear-gradient(135deg, #ffdd59 0%, #ffa801 100%);
  border: 1px solid #ffa801;
  /* transition: 0.3s; */
  &:hover {
    background: #ffdd59;
    cursor: pointer;
  }
  &:active {
    background: #ffa801;
    box-shadow: 0px 0px 5px 1px #ffa801;
  }
`;
