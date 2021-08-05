import styled from 'styled-components';

export const Drop = styled.div`
  margin-top: 12px;
  width: calc(100% - 8px);
  height: 100px;
  border: 4px dashed #b3b5b9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #dedee0;
  font-weight: 800;
  color: #76787d;

  & div {
    margin-top: 4px;
  }
`;

export const LoadingThumbnail = styled.div`
  color: #d35400;
`;
export const ThumbnailImage = styled.div`
  float: right;
  margin: 16px 0 0 0;
  border: 4px solid #b3b5b9;
  border-radius: 8px;
  width: 320px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  & div {
    font-weight: 800;
    color: #76787d;
  }
`;

export const Container = styled.div`
  & a {
    color: #636e72;
  }
  & a:hover {
    color: #0984e3;
  }
`;

export const ResponsiveDiv = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  margin: 16px 16px 0 0;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #7f8fa6;
  margin-bottom: 4px;

  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const Desc = styled.textarea`
  min-height: 90px;
  min-width: 400px;
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #7f8fa6;
  margin: 4px 0 4px 0;
  resize: vertical;
  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const Label = styled.label`
  margin: 0 0 2px 4px;
  font-size: 14px;
  font-weight: 800;
  color: #000;
  position: relative;
  display: inline-block;
`;

export const UploadButton = styled.button`
  font-family: 'Noto Sans KR', sans-serif;
  width: 120px;
  height: 32px;
  color: #fff;
  background-color: #2da44e;
  border: 1px solid #2a9147;
  border-radius: 8px;
  transition: 0.1s;
  margin: 8px 0;

  &:hover {
    color: #ecf0f1;
    background-color: #2c974b;
    cursor: pointer;
  }
  &:active {
    background-color: #2da44e;
  }
`;
