import styled from 'styled-components';

export const Container = styled.table`
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: text;

  & a {
    color: #000;
    flex: none;
    white-space: nowrap;
    width: 60px;
  }
  & a:hover {
    color: #0984e3;
  }
`;

export const BoardContent = styled.div`
  & p {
    margin: 8px;
  }
  & tr,
  td,
  td {
    border: 1px solid black;
    padding: 4px;
  }
  & blockquote {
    //border: 1px solid #0984e3;

    border-left: 6px solid #0984e3;
    margin: 12px 0;
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

export const UpdateButton = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  &:hover {
    cursor: pointer;
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
