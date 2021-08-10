import styled from 'styled-components';

export const Container = styled.table`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 24px;
  user-select: text;

  & a {
    color: #000;
  }
  & a:hover {
    color: #0984e3;
  }
`;

export const BoardContent = styled.div`
  & p {
    margin: 0;
  }
  & tr,
  td,
  td {
    border: 1px solid black;
    padding: 4px;
  }
  & blockquote {
    border: 1px solid #0984e3;
    border-left: 8px solid #0984e3;
    margin: 12px;
    padding: 20px;
  }
  & ul,
  ol {
    padding: 4px 24px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  height: 100%;
`;

export const UpdateButton = styled.button`
  position: absolute;
  top: -16px;
  right: 0;
  font-weight: 800;
  margin: 15px 0 40px 0;
  width: 84px;
  height: 32px;
  border-radius: 3px;
  background: linear-gradient(135deg, #ffdd59 0%, #ffa801 100%);
  border: 1px solid #ffa801;
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
  flex-direction: row;
`;

export const PostTitle = styled.div`
  font-size: 44px;
  font-weight: 800;
  margin: 4px 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardInfo = styled.table`
  display: flex;
  font-size: 15px;
  align-items: center;
  margin-bottom: 32px;
`;
