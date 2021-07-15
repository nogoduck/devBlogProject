import styled from "styled-components";

export const LinkToGitHub = styled.a`
  /* color: #d2dae2; */
  color: #fff;
  position: absolute;
  font-size: 16px;
  right: 230px;
  top: 20px;
  width: 70px;
  transition: 0.2s 0s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

export const Button = styled.button`
  width: 300px;
  font-weight: 800;
  height: 30px;
  border-radius: 3px;
  background: #dff9fb;
  border: 1px solid #7f8fa6;
  transition: 0.3s;
  position: absolute;
  bottom: 35px;
  &:hover {
    background: #d2dae2;
    cursor: pointer;
  }
  &:active {
    background: #808e9b;
    box-shadow: 0px 0px 3px 1px #ea8685 inset;
    color: #fff;
  }
`;

export const SignInButton = styled.div`
  position: absolute;
  right: 60px;
  font-size: 12px;
  height: 60px;
  width: 140px;
  background: #eb2f06;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 800;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 3px #b32304 inset;
    color: #fff;
  }
`;

export const SignUpButton = styled.div`
  font-size: 12px;
  height: 60px;
  width: 60px;
  background: #1e272e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 3px #151d22 inset;
    color: #fff;
  }
`;

export const Profile = styled.div`
  position: absolute;
  right: 60px;
  font-size: 12px;
  height: 60px;
  width: 140px;
  background: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-weight: 800;
  transition: 0.2s;
  z-index: 12;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 3px #2980b9 inset;
    color: #fff;
  }
`;

export const LogoutButton = styled.div`
  font-size: 12px;
  height: 60px;
  width: 60px;
  background: #1e272e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 3px #151d22 inset;
    color: #fff;
  }
`;

export const Right = styled.div`
  float: right;
  position: relative;
`;

export const ProfileMenu = styled.div`
  //hover시 나타나는 효과가 적용되어 있기에 너비또는 높이 변경시 반드시
  //App.css의 #showProfileMenu 의 높이도 알맞게 수정해주어야함, 너비는 수정이 불가능에 가까움
  position: absolute;
  width: 138px;
  height: 150px;
  border-radius: 0 0 10px 10px;
  background-color: #3498db;
  top: 0;
  right: 60px;
  border: 1px solid #3498db;
  border-width: 0 1px 1px 1px;
  transition: 0.2s 0s ease-in-out;
  font-size: 16px;
  font-weight: 12px;
  color: #fff;
  z-index: 10;

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & li {
    padding: 6px 0;
    cursor: pointer;
  }
  & hr {
    width: 100%;
    margin: 0px;
    padding: 0px;
    border: 1px solid #fff;
  }
`;

export const __space__ = styled.div`
  height: 60px;
  border: 1px solid black;
  /* width: 100%;s */
`;
