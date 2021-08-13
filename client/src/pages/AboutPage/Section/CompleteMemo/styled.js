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
  margin: 16px 0 8px 0;
`;

export const MemoCompleteButton = styled.button`
  color: #009432;
  border-radius: 50%;
  margin-left: 8px;
  width: 28px;
  height: 28px;
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
  //border: 1px solid #808e9b;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(127, 143, 166, 0.51);
  background: #fef28f;
  margin: 0 0 8px 0;
  padding: 4px 12px;
  font-size: 16px;
  color: #95a5a6;
  text-decoration: line-through;

  & button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;
export const RestoreButton = styled.button`
  font-size: 20px;
`;
export const DeleteButton = styled.button``;
