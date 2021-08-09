import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Container,
  Title,
  Line,
  Label,
  Form,
  Input,
  Message,
  Error,
  ErrorInput,
  UpdatePasswordButton,
  DeleteAccountButton,
} from './styled';
import { useSelector } from 'react-redux';
import axios from 'axios';

import DeleteAccountModal from '../../components/DeleteAccountModal';
import useInput from '../../hooks/useInput';

function SettingAccountPage() {
  const user = useSelector((state) => state.user);

  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [currentPassword, setCurrentPassword, onChangeCurrentPassword] =
    useInput('');
  const [successUpdatePassword, setSuccessUpdatePassword] = useState(false);

  const [updatePassword, setUpdatePassword] = useState('');
  const [updatePasswordCheck, setUpdatePasswordCheck] = useState('');

  const [errorCurrentPassword, setErrorCurrentPassword] = useState({
    validation: false,
    void: false,
  });
  const [errorUpdatePassword, setErrorUpdatePassword] = useState({
    validation: false,
    minLength: false,
    void: false,
  });

  const [errorUpdatePasswordCheck, setErrorUpdatePasswordCheck] = useState({
    validation: false,
    void: false,
  });

  const onCheckValidation = () => {
    let errorState = false;
    //updatePassword 유효성 검사
    //입력되지 않았을 때
    if (updatePassword === '') {
      setErrorUpdatePassword({
        ...errorUpdatePassword,
        void: true,
      });
      setTimeout(() => {
        setErrorUpdatePassword({ ...errorUpdatePassword, void: false });
      }, 5000);
      errorState = true;
    }

    // 6글자 이하로 입력되었을 때
    if (updatePassword.length < 6) {
      setErrorUpdatePassword({
        ...errorUpdatePassword,
        minLength: true,
      });
      setTimeout(() => {
        setErrorUpdatePassword({ ...errorUpdatePassword, minLength: false });
      }, 5000);
      errorState = true;
    }

    //updatePasswordCheck 유효성 검사
    //미입력 상태
    if (updatePasswordCheck === '') {
      setErrorUpdatePasswordCheck({
        ...errorUpdatePasswordCheck,
        void: true,
      });
      setTimeout(() => {
        setErrorUpdatePasswordCheck({
          ...errorUpdatePasswordCheck,
          void: false,
        });
      }, 5000);
      errorState = true;
    }
    //updatePassword 와 동일한지 비교
    if (updatePassword !== updatePasswordCheck) {
      console.log('동일');
      setErrorUpdatePasswordCheck({
        ...errorUpdatePasswordCheck,
        validation: true,
      });
      setTimeout(() => {
        setErrorUpdatePasswordCheck({
          ...errorUpdatePasswordCheck,
          validation: false,
        });
      }, 5000);
      errorState = true;
    }

    return errorState;
  };

  const clear = () => {
    setCurrentPassword('');
    setUpdatePassword('');
    setUpdatePasswordCheck('');
  };
  const onClickDeleteAccountButton = () => {
    setShowDeleteAccountModal((prev) => !prev);
  };

  const onCloseDeleteAccountModal = () => {
    setShowDeleteAccountModal(false);
  };

  const onClickUpdatePassword = () => {
    const payload = {
      _id: user.authStatus._id,
      currentPassword: currentPassword,
      updatePassword: updatePassword,
    };
    console.log('payload >> ', payload);

    axios
      .patch('/api/users/update/password', payload)
      .then(({ data }) => {
        console.log('data >> ', data);
        if (data.updatePassword) {
          //변경 성공
          setSuccessUpdatePassword(true);
          clear();
          setTimeout(() => {
            setSuccessUpdatePassword(false);
          }, 5000);
        } else {
          //변경 실패
          if (onCheckValidation()) {
            //비밀번호 변경 유효성 부적절
            console.log('비밀번호 변경 유효성 부적절');
            // return null;
          }

          if (data.mismatchPassword) {
            console.log('비밀번호가 일치하지 않음');
            setErrorCurrentPassword({
              ...errorCurrentPassword,
              validation: true,
            });
            setTimeout(() => {
              setErrorCurrentPassword({
                ...errorCurrentPassword,
                validation: false,
              });
            }, 5000);
          } else {
            console.log('변경에 실패했습니다');
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeUpdatePassword = (e) => {
    setUpdatePassword(e.target.value);
  };
  const onChangeUpdatePasswordCheck = (e) => {
    setUpdatePasswordCheck(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <Line />
      <Form onSubmit={onSubmit}>
        <Label for="currentPassword">현재 비밀번호</Label>
        <Input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={onChangeCurrentPassword}
        />
        {errorCurrentPassword.validation && (
          <Message style={{ color: '#e74c3c' }}>
            비밀번호가 일치하지 않습니다.
          </Message>
        )}
        <Label for="changePassword">변경할 비밀번호</Label>
        <Input
          type="password"
          id="changePassword"
          value={updatePassword}
          onChange={onChangeUpdatePassword}
        />
        {errorUpdatePassword.void && (
          <Message style={{ color: '#e74c3c' }}>
            비밀번호가 입력되지 않았습니다.
          </Message>
        )}
        {errorUpdatePassword.minLength && (
          <Message style={{ color: '#e74c3c' }}>
            비밀번호는 6글자 이상부터 사용할 수 있습니다.
          </Message>
        )}
        <Label for="confirmChangePassword">변경할 비밀번호 확인</Label>
        <Input
          type="password"
          id="confirmChangePassword"
          value={updatePasswordCheck}
          onChange={onChangeUpdatePasswordCheck}
        />
        {errorUpdatePasswordCheck.validation && (
          <Message style={{ color: '#e74c3c' }}>
            변경할 비밀번호와 일치하지 않습니다.
          </Message>
        )}
        <Message>비밀번호는 6글자 이상부터 사용할 수 있습니다.</Message>
        {successUpdatePassword && (
          <Message style={{ color: '#009432' }}>
            비밀번호가 변경되었습니다.
          </Message>
        )}
        <UpdatePasswordButton onClick={onClickUpdatePassword}>
          비밀번호 변경
        </UpdatePasswordButton>
      </Form>
      <Title>회원탈퇴</Title>
      <Line />

      <Label>
        회원가입시 입력한 정보와 등록된 모든 정보와 등록된 프로필 이미지가 모두
        제거됩니다 <br /> 회원탈퇴한 계정은 되돌릴 수 없습니다. 다시 한번
        생각해주세요
      </Label>
      <br />
      <DeleteAccountButton onClick={onClickDeleteAccountButton}>
        회원탈퇴
      </DeleteAccountButton>
      <DeleteAccountModal
        show={showDeleteAccountModal}
        close={onCloseDeleteAccountModal}
      />
    </Container>
  );
}

export default withRouter(SettingAccountPage);
