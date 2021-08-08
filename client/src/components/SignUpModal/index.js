import { withRouter } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TiWarning } from 'react-icons/ti';

import {
  Input,
  SubmitButton,
  Label,
  Error,
  Footer,
  Form,
  Container,
} from './styled';
import { useDispatch } from 'react-redux';
import { signupUser, auth } from '../../_actions/user_actions';
import Modal from '../Modal';
import AlertModal from '../AlertModal';
import PulseLoader from 'react-spinners/PulseLoader';

function SignUpModal({ history, children, show, close }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const password = useRef();
  const [loading, setLoading] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  password.current = watch('password');

  const onSubmit = (user) => {
    setLoading(true);
    dispatch(signupUser(user)).then((res) => {
      if (res.payload.signupSuccess) {
        //회원가입 성공
        close();
        setLoading(false);
        setShowSuccessSignUpModal(true);

        //상단바 버튼 상태를 바꿔주기 위해 리덕스로 로그인 상태 확인
        dispatch(auth()).then((res) => {
          console.log('Login Auth Status : ', res);
        });
      } else {
        //회원가입 실패
        setLoading(false);
        if (res.payload.isEmail) {
          setIsEmailError(true);
          console.log('이메일 존재함');
          errors.email = true;
        } else {
          alert('회원가입에 실패했습니다. 잠시후에 다시 시도해주세요');
        }
      }
    });
  };

  const onClickSignUpModal = () => {
    setShowSignUpModal((prev) => !prev);
  };

  //회원가입 완료
  const [showSuccessSignUpModal, setShowSuccessSignUpModal] = useState(false);

  const onCloseSuccessSignUp = () => {
    setShowSuccessSignUpModal(false);
  };

  useEffect(() => {
    //회원가입 모달 창을 닫을 때 입력된 내용이나 에러 초기화
    if (!show) {
      setLoading(false);
      setValue('nickname');
      setValue('name');
      setValue('email');
      setValue('password');
      setValue('passwordConfirm');
      errors.nickname = false;
      errors.name = false;
      errors.email = false;
      errors.password = false;
      errors.passwordConfirm = false;
    }
  }, [errors, setValue, show]);

  return (
    <Container>
      <span onClick={onClickSignUpModal}>
        <Modal
          show={show}
          close={close}
          style={{
            padding: '30px',
            width: '300px',
            height: '550px',
          }}
        >
          <div style={{ fontSize: '24px' }}>회원가입</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>닉네임</Label>
            <Input
              id={errors.nickname && 'warningInput'}
              spellCheck="false"
              name="nickname"
              {...register('nickname', {
                required: true,
                maxLength: 12,
              })}
              autoFocus
              placeholder="canyon"
            />
            {errors.nickname && errors.nickname.type === 'required' && (
              <Error>
                <TiWarning />
                &nbsp;닉네임을 입력해주세요
              </Error>
            )}
            {errors.nickname && errors.nickname.type === 'maxLength' && (
              <Error>
                <TiWarning />
                &nbsp;닉네임은 12자 이하로 입력가능합니다
              </Error>
            )}
            <Label>이름</Label>
            <Input
              id={errors.name && 'warningInput'}
              spellCheck="false"
              name="name"
              {...register('name', {
                required: true,
                maxLength: 10,
              })}
              placeholder="canyon"
            />
            {errors.name && errors.name.type === 'required' && (
              <Error>
                <TiWarning />
                &nbsp;이름을 입력해주세요
              </Error>
            )}
            {errors.name && errors.name.type === 'maxLength' && (
              <Error>
                <TiWarning />
                &nbsp;이름은 10글자 이하로 입력가능합니다
              </Error>
            )}
            <Label>이메일</Label>
            <Input
              id={(errors.email || isEmailError) && 'warningInput'}
              spellCheck="false"
              name="email"
              type="email"
              placeholder="canyon@example.com"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />

            {isEmailError && (
              <Error>
                <TiWarning />
                &nbsp;가입된 이메일이 이미 존재합니다
              </Error>
            )}

            {errors.email && (
              <Error>
                <TiWarning />
                &nbsp;이메일 형식이 올바르지 않습니다
              </Error>
            )}

            <Label>비밀번호</Label>
            <Input
              id={errors.password && 'warningInput'}
              spellCheck="false"
              name="password"
              type="password"
              placeholder="iWillBuyACanyonCF7"
              {...register('password', {
                required: true,
                minLength: 6,
              })}
            />
            {errors.password && errors.password.type === 'required' && (
              <Error>
                <TiWarning />
                &nbsp;비밀번호를 입력해주세요
              </Error>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <Error>
                <TiWarning />
                &nbsp;비밀번호는 6글자 이상으로 입력해주세요
              </Error>
            )}

            <Label>비밀번호 확인</Label>
            <Input
              id={errors.passwordConfirm && 'warningInput'}
              spellCheck="false"
              name="confirm"
              type="password"
              placeholder="iWillBuyACanyonCF7"
              {...register('passwordConfirm', {
                required: true,
                validate: (value) => value === password.current,
              })}
            />
            {errors.passwordConfirm &&
              errors.passwordConfirm.type === 'required' && (
                <Error>
                  <TiWarning />
                  &nbsp;비밀번호 확인을 입력해주세요
                </Error>
              )}
            {errors.passwordConfirm &&
              errors.passwordConfirm.type === 'validate' && (
                <Error>
                  <TiWarning />
                  &nbsp;비밀번호가 동일하지 않습니다
                </Error>
              )}

            <SubmitButton
              id={loading ? 'passive' : ''}
              onSubmit={onSubmit}
              disabled={loading}
            >
              {!loading && <>계정 생성하기</>}
              {loading && <PulseLoader color="gray" size={4} margin={2} />}
            </SubmitButton>
          </Form>
          <Footer>
            {children}
            {/* &#10004; */}
          </Footer>
        </Modal>
      </span>
      <AlertModal
        show={showSuccessSignUpModal}
        close={onCloseSuccessSignUp}
        modalHeader="회원가입"
        title="회원가입에 성공했습니다"
        option="success"
        useCancelButton={false}
        confirm={onCloseSuccessSignUp}
      ></AlertModal>
    </Container>
  );
}

export default withRouter(SignUpModal);
