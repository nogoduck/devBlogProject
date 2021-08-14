import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & hr {
    width: 100%;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;

  margin-top: 2em;
  margin-bottom: 16px;
`;

export const MemoCompleteIcon = styled.div`
  border: 2px dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #009432;
  border-radius: 50%;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  position: relative;
  font-size: 42px;
  & div {
    position: absolute;
    user-select: none;
    top: -30px;
    left: 2px;
  }
`;

export const DeleteAllButton = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(127, 143, 166, 0.51);
  margin: 0 0 8px 0;
  padding: 4px 12px;
  font-size: 16px;
  cursor: pointer;
  color: orange;
  font-weight: 800;
  transition: 0.2s;
  &:hover {
    //background: linear-gradient(160deg, #fef28f 0%, #fee523 100%);
    color: #fff;
    background: orange;
  }
`;

export const CompleteMemoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(127, 143, 166, 0.51);
  background: #fef28f;
  margin: 0 0 8px 0;
  padding: 4px 12px;
  font-size: 16px;
  color: #95a5a6;
  transition: 0.1s;
  position: relative;
  & .complete_text {
    text-decoration: line-through;
    position: relative;
  }

  & .complete_text::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 0%;
    background: red;
    top: 10px;
    transition: 0.5s;
  }
  &:hover .complete_text::before {
    width: 100%;
  }
  &:hover .complete_text {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.2) rotate(4deg);
  }
  & button {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    user-select: none;
    box-shadow: 0 0 1px 1px orange;
    border: none;
    width: 25px;
    height: 25px;
    margin: 0 2px;
    cursor: pointer;
  }
`;

export const CompleteETCButton = styled.div`
  display: flex;
  margin: 0 0 0 8px;
  position: relative;
`;

export const RestoreButton = styled.button`
  font-size: 18px;
  color: green;
  padding: 0 0 4px 0;
`;
export const DeleteButton = styled.button``;
