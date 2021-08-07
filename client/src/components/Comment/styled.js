import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
`;
export const Main = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
  user-select: none;
`;
export const Form = styled.form`
  padding: 0 4px 0 4px;
  margin-bottom: 32px;

  & div {
    display: flex;
  }

  #passive {
    background-color: #ececec;
    color: #a89090;
    cursor: default;
  }
`;
export const TextareaComment = styled.div`
  width: 100%;
  & textarea {
    resize: none;
    width: 100%;
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0 0 8px 12px;
    color: #000;
    border: 1px solid #a89090;
    border-width: 0 0 1px 0;
  }

  & textarea:focus {
    border: 1px solid black;
    border-width: 0 0 2px 0;
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
  margin-right: 10px;
  user-select: none;

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

export const CommentNestedContainer = styled.div`
  margin-left: 30px;
`;
