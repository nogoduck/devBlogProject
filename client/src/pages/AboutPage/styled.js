import styled from 'styled-components';

export const MemoContent = styled.div`
  color: #000;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const MemoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
`;

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
  font-size: 20px;
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

export const ListContainer = styled.div`
  margin: 0 12px;
`;

export const List = styled.div`
  //체크시 해당 리스트 회색으로 처리하고 중앙선 그을 예정 + success:true

  margin: 5px 10px;

  & > input {
    position: absolute;
    right: 12px;
  }
  & > input[id='list-checkbox'] {
    height: 18px;
    width: 18px;
  }
  & > input[id='list-checkbox']:checked {
    height: 18px;
    width: 18px;
    color: #009432;
  }
`;

export const CategoryCreate = styled.div`
  margin: 8px;
  border: 1px solid #808e9b;
  color: #000;
  border-radius: 5px;
  cursor: pointer;
  background-color: #dedede;
  /* background-color: transparent; */
  box-shadow: 0 0 5px 1px #7f8fa6;
  position: relative;
  min-width: 200px;
  min-height: 200px;
  max-width: 500px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fff;
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

export const ListButton = styled.button`
  color: #747d8c;
  right: 4px;
  top: -2px;
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: 800;
  border: none;
  background-color: transparent;
  transition: 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border:1px solid black; */
  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

export const CategoryTitle = styled.div`
  color: #000;
  margin: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
`;

export const CategoryETCButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
export const MemoETCButtonContainer = styled.div`
  display: flex;
  & button {
    box-shadow: 0 0 1px 1px orange;
    border: none;
    width: 25px;
    height: 25px;
    margin: 0 1px;
    cursor: pointer;
  }
`;

export const CategoryEditButton = styled.button`
  color: deeppink;
`;
export const CategoryDeleteButton = styled.button`
  color: blue;
`;
export const MemoEditButton = styled.button`
  color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MemoDeleteButton = styled.button`
  color: orange;
  font-size: 8px;
  border-radius: 50%;
`;
export const MemoCompleteButton = styled.button`
  color: green;
  border-radius: 50%;
`;
export const CompleteMemoContainer = styled.div`
  font-size: 16px;
  color: #95a5a6;
  text-decoration: line-through;
`;
