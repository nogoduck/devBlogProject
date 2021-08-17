import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & a {
    color: #636e72;
  }
  & a:hover {
    color: #0984e3;
  }

  & .del_btn:hover {
    color: red;
  }
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
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
  border: 1px solid #c4c4c4;
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

export const Title = styled.div`
  font-size: 20px;
  margin: 4px 0;
`;

export const InputDescription = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 3px;
`;

export const SubmitButton = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const UpdateButton = styled.a`
  position: absolute;
  white-space: nowrap;
  right: 0;
  top: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteButton = styled.a`
  top: 32px;
  right: -30px;
  white-space: nowrap;
  position: absolute;

  &:hover {
    cursor: pointer;
  }
`;
