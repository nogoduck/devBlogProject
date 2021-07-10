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

export const InputTitle = styled.input`
  font-size: 19px;
  font-weight: 800;
  border: 1px dashed #b2bec3;
  border-radius: 3px;
`;

export const InputDescription = styled.textarea`
  resize: none;
  font-size: 16px;
  border: 1px dashed #b2bec3;
  border-radius: 3px;
`;

export const DeleteButton = styled.button`
  font-weight: 800;
  margin: 15px 0 40px 0;
  width: 180px;
  height: 30px;
  border-radius: 3px;
  background: #ff7675;
  border: 1px solid #7f8fa6;
  color: #fff;
  transition: 0.3s;
  align-self: flex-end;
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

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin: 4px 0;
`;
