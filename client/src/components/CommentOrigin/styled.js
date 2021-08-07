import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #030303;
`;
export const Form = styled.div`
  margin-bottom: 32px;

  & div {
    display: flex;
  }

  & #passive {
    background-color: #ececec;
    color: #a89090;
    cursor: default;
  }
`;

export const Content = styled.div`
  white-space: pre-wrap;
  display: flex;
  margin-bottom: 12px;
  //border: 1px solid green;
`;

export const ContentHead = styled.div`
  margin: 6px 12px 0 0;
`;
export const ContentBody = styled.div`
  //border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const UserTime = styled.span`
  margin-left: 2px;
  font-size: 14px;
  color: #a89090;
`;
export const NestedButton = styled.button`
  background: transparent;
  border: none;
  margin: 6px 0;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled.button`
  float: right;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: transparent;
  border: none;
  transition: 0.1s;
  user-select: none;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  float: right;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #cce6ff;
  border: 1px solid #c3cfe0;
  transition: 0.2s;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const TextareaComment = styled.div`
  width: 100%;
  margin-left: 8px;
  & textarea {
    resize: none;
    width: 99%;
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    color: #000;
    border: 1px solid #a89090;
    border-width: 0 0 1px 0;
  }

  & textarea:focus {
    border: 1px solid black;
    border-width: 0 0 2px 0;
  }
`;
