import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 24px;
  & a {
    color: #636e72;
  }
  & a:hover {
    color: #0984e3;
  }
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WriteButton = styled.button`
  color: green;
  width: 100px;
  right: 0px;
  bottom: 0px;
  align-self: flex-end;
  width: 120px;
  height: 40px;
`;

export const Label = styled.label`
  margin-top: 16px;
  padding: 0 0 0 4px;
  font-size: 14px;
  font-weight: 800;
  color: #000;
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #7f8fa6;
  transition: 0.3s;
  margin-top: 4px;
  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const InputTitle = styled.input`
  width: 100%;
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #7f8fa6;
  transition: 0.3s;
  margin-top: 4px;
  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const AddButton = styled.button`
  margin: 2px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 800;
  border-radius: 3px;
  background: #74b9ff;
  border: 1px solid #7f8fa6;
  transition: 0.3s;
  &:hover {
    background: #0984e3;
    cursor: pointer;
  }
  &:active {
    background: #808e9b;
    box-shadow: 0px 0px 3px 1px #ea8685 inset;
    color: #fff;
  }
`;
export const CancelButton = styled.button`
  margin: 2px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 800;
  border-radius: 3px;
  background: #fab1a0;
  border: 1px solid #7f8fa6;
  transition: 0.3s;
  &:hover {
    background: #e17055;
    cursor: pointer;
  }
  &:active {
    background: #808e9b;
    box-shadow: 0px 0px 3px 1px #ea8685 inset;
    color: #fff;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  margin: 4px 0;
`;

export const SubmitButton = styled.button`
  font-weight: 800;
  width: 84px;
  height: 32px;
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

export const Box = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #7f8fa6;
  width: 100%;
  padding: 3px;
  border-radius: 3px;
`;

export const BoxFile = styled.div`
  margin: 0 8px;
  font-size: 14px;
`;

export const UpdateButton = styled.button`
  font-weight: 800;
  width: 84px;
  margin: 4px;
  height: 32px;
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

export const DeleteModalSubmitButton = styled.button`
  /* float: right; */
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #cce6ff;
  border: 1px solid #c3cfe0;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px #73b7fa inset;
  }
  &:active {
    background: #73b7fa;
    color: #fff;
  }
`;

export const DeleteModalCancelButton = styled.button`
  /* float: right; */
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
    box-shadow: 0px 0px 5px 1px #ff9785 inset;
  }
  &:active {
    background: #ff9785;
    color: #fff;
  }
`;

export const DeleteButton = styled.button`
  font-weight: 800;
  margin: 4px;
  width: 84px;
  height: 32px;
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

export const AlertSubmitButton = styled.button`
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #cce6ff;
  border: 1px solid #c3cfe0;
  transition: 0.1s;

  /* bottom: 0; */
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px #73b7fa inset;
  }
  &:active {
    background: #73b7fa;
    color: #fff;
  }
`;

export const UpdateButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
