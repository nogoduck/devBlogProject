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
`;
export const MemoDeleteButton = styled.button`
  color: #e74c3c;
`;
export const MemoCompleteButton = styled.button`
  font-size: 20px;
  color: #009432;
  border-radius: 50%;
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
