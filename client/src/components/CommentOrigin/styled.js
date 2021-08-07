import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: orange;
`;
export const Content = styled.div`
  white-space: pre-wrap;
`;
export const Form = styled.div`
  margin-bottom: 32px;
  & #passive {
    background-color: #ececec;
    color: #a89090;
    cursor: default;
  }
`;
export const ContentBody = styled.div`
  //white-space: ;
`;
export const NestedButton = styled.button`
  background: transparent;
  border: none;
  margin: 12px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled.button`
  float: right;
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: transparent;
  border: none;
  transition: 0.1s;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  float: right;
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #cce6ff;
  border: 1px solid #c3cfe0;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
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
