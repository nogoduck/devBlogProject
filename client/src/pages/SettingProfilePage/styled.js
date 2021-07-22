import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  margin-top: 16px;
  margin-bottom: 4px;
  padding: 0 0 0 4px;
  font-size: 14px;
  font-weight: 800;
  color: #000;
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  width: 350px;
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #7f8fa6;
  transition: 0.3s;
  margin-top: 4px;
  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const Title = styled.div`
  font-size: 26px;
  margin-top: 26px;
`;

export const Line = styled.hr``;

export const NicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  font-size: 13px;
  margin: 8px 0;
`;

export const Error = styled.div`
  margin: 5px 0 0 0;
  font-size: 14px;
  font-weight: 800;
  color: #ff3f34;
`;

export const ErrorInput = styled.div`
  & > input {
    width: 291px;
    padding: 5px 0px 5px 7px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid #ff3f34;
    box-shadow: 0px 0px 3px 1px #ea8685 inset;
  }
`;

export const UpdateNicknameButton = styled.button`
  width: 120px;
  height: 32px;
  color: #fff;
  background-color: #2da44e;
  border: 1px solid #2a9147;
  border-radius: 8px;
  font-weight: 800;
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

export const SettingProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;

  //닉네임 섹션
  & > div:nth-child(1) {
    /* border: 1px solid black; */
    flex: 1;
  }
  //이미지 섹션
  & > div:nth-child(2) {
    /* border: 1px solid red; */
    width: 256px;
    position: relative;
  }
  & > div:nth-child(2) > input[type="file"] {
    display: none;
  }
`;

export const EditPicket = styled.div`
  width: 74px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d0d7de;
  border-radius: 5px;
  position: absolute;
  bottom: 24px;
  left: 0px;
  background-color: #fff;
  font-size: 15px;
`;

export const EditProfileImage = styled.div`
  width: 250px;
  height: 250px;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px solid #d0d7de;
`;

export const List = styled.div`
  font-size: 15px;

  & li {
    padding: 4px 20px;
  }
  & li:first-child {
    margin-top: 8px;
  }
  & li:last-child {
    margin-bottom: 8px;
  }
  & li:hover {
    background-color: #0969da;
    color: #fff;
    cursor: pointer;
  }
`;
