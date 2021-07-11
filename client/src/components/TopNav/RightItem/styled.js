import styled from "styled-components";

export const LinkToGitHub = styled.a`
  /* color: #d2dae2; */
  color: #fff;
  position: absolute;
  font-size: 16px;
  right: 220px;
  top: 20px;
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
  flex-direction: column;
  font-weight: 800;
  transition: 0.2s;
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
