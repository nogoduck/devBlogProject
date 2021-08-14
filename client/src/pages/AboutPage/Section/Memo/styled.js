import styled from 'styled-components';

export const MemoContent = styled.div`
  margin: 1px 0;
  color: #000;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  margin-right: 4px;
`;

export const MemoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
`;

export const MemoEditButton = styled.button`
  color: #2980b9;
  position: relative;
  &::before {
    content: '수정';
    position: absolute;
    border-radius: 4px;
    top: -28px;
    background-color: #414c5d;
    color: #ebecee;
    white-space: nowrap;
    padding: 2px 8px;
    font-size: 12px;
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    width: 0px;
    height: 0px;
    border-top: 7px solid #414c5d;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    display: none;
  }
  &:hover::before {
    display: block;
  }
  &:hover::after {
    display: block;
  }
`;
export const MemoDeleteButton = styled.button`
  color: #e74c3c;
  position: relative;
  padding: 0 0 2px 0;
  &::before {
    content: '삭제';
    position: absolute;
    border-radius: 4px;
    top: -28px;
    background-color: #414c5d;
    color: #ebecee;
    white-space: nowrap;
    padding: 2px 8px;
    font-size: 12px;
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    width: 0px;
    height: 0px;
    border-top: 7px solid #414c5d;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    display: none;
  }
  &:hover::before {
    display: block;
  }
  &:hover::after {
    display: block;
  }
`;
export const MemoCompleteButton = styled.button`
  font-size: 20px;
  color: #009432;
  border-radius: 50%;
  position: relative;
  padding: 0 0 2px 0;
  &::before {
    content: '완료';
    position: absolute;
    border-radius: 4px;
    top: -28px;
    background-color: #414c5d;
    color: #ebecee;
    white-space: nowrap;
    padding: 2px 8px;
    font-size: 12px;
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    width: 0px;
    height: 0px;
    border-top: 7px solid #414c5d;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    display: none;
  }
  &:hover::before {
    display: block;
  }
  &:hover::after {
    display: block;
  }
`;
export const MemoETCButtonContainer = styled.div`
  display: flex;
  & > button {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    box-shadow: 0 0 1px 1px orange;
    border: none;
    width: 25px;
    height: 25px;
    margin: 0 2px;
    cursor: pointer;
  }
`;
