import styled from 'styled-components';

export const Notice = styled.div`
  border: 2px solid orange;
  border-radius: 5px;
  padding: 16px;
  font-weight: 800;
  margin: 8px 0;
`;

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  & button {
    font-size: 10px;
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  position: relative;
  user-select: text;
  & hr {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 391px;
  padding: 5px 0 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #c3cfe0;
  transition: 0.3s;
  &:focus {
    box-shadow: 0 0 5px 1px #7f8fa6;
  }
`;

export const Label = styled.label`
  padding: 7px;
  font-size: 18px;
  font-weight: 800;
  color: #000;
  position: relative;
  display: inline-block;
  top: -8px;
`;

export const SubmitButton = styled.button`
  float: right;
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #cce6ff;
  border: 1px solid #c3cfe0;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 1px #73b7fa inset;
  }
  &:active {
    background: #73b7fa;
    color: #fff;
  }
`;

export const CancelButton = styled.button`
  float: right;
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #ffe3de;
  border: 1px solid #c3cfe0;
  transition: 0.1s;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 1px #ff9785 inset;
  }
  &:active {
    background: #ff9785;
    color: #fff;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  //Style1
  //background: #f7f7a0;

  //Style2
  background: linear-gradient(
    160deg,
    rgba(254, 242, 143, 1) 0%,
    rgba(254, 229, 35, 1) 100%
  );
  border: 1px solid #808e9b;
  display: inline-block;
  color: #000;
  border-radius: 5px;
  box-shadow: 4px 4px 12px 1px #7f8fa6;
  margin: 8px;
  position: relative;
  min-width: 256px;
  max-width: 512px;
`;

export const MemoContainer = styled.div`
  margin: 0 12px;
`;

export const CategoryCreate = styled.div`
  margin: 8px;
  border: 1px solid #808e9b;
  color: #000;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fef28f;
  box-shadow: 0 0 5px 1px #7f8fa6;
  position: relative;
  min-width: 200px;
  min-height: 200px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    background: #fef28f61;
  }
`;

export const CategoryAdd = styled.button`
  cursor: pointer;
  font-size: 20px;
  font-weight: 800;
  background: transparent;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const MemoButton = styled.button`
  display: flex;
  align-items: center;
  margin: 4px 0 8px 0;
  justify-content: center;
  color: #747d8c;
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  border: none;
  background-color: transparent;
  transition: 0.1s;
  /* border:1px solid black; */
  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

export const CategoryTitle = styled.div`
  color: #000;
  margin: 4px 12px 0 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
`;
export const CategorySection1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryDeleteButton = styled.button`
  font-size: 16px;
  font-weight: 800;
`;
export const CategorySettingButton = styled.button``;
export const CategoryETCButtonContainer = styled.div`
  margin: 6px 4px 0 0;
  & button {
    background-color: transparent;
    flex-direction: column;
    user-select: none;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
