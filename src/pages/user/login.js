import React, { useState, useCallback } from 'react';
import { NavBar, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Link } from 'react-router-dom';
import { LogoBox, FormContent, BtnWrap, Read, ForgetWrap, ToggleType } from './style.js';
import PngIcon from '../../components/PngIcon';
import Eye from '../../components/Eye';
import Logo from '../../components/Logo/Logo';
import InviteBtn from '../../components/InviteBtn';
import GoBack from '../../components/GoBack';

const Register = props => {
  const [passwordType, setPasswordType] = useState('password');
  const { getFieldProps, setFieldsInitialValue } = props.form;
  const [loginType, setLoginType] = useState('pwd');

  const submit = useCallback(
    () => {
      const data = props.form.getFieldsValue();
      console.log(data);
    },
    [props.form]
  );

  const togglePasswordType = useCallback(
    () => {
      if (passwordType === 'password') {
        setFieldsInitialValue({
          password: '',
        });
        setPasswordType('text');
      } else {
        setFieldsInitialValue({
          code: '',
        });
        setPasswordType('password');
      }
    },
    [passwordType, setFieldsInitialValue]
  );

  const sendVerify = useCallback(() => {
    console.log('发送验证码');
  }, []);

  const handleToggle = useCallback(
    () => {
      switch (loginType) {
        case 'pwd':
          setLoginType('invite');
          break;
        case 'invite':
          setLoginType('pwd');
          break;
        default:
          break;
      }
    },
    [loginType]
  );

  return (
    <div>
      <NavBar mode="light" icon={<GoBack />} rightContent={<Link to="/register">注册</Link>}>
        登录
      </NavBar>
      <LogoBox>
        <Logo />
      </LogoBox>
      <FormContent>
        <InputItem {...getFieldProps('mobile')} placeholder="手机号码" clear>
          <PngIcon width="32px" height="36px" icon="mobile" />
        </InputItem>
        {loginType === 'pwd' ? (
          <InputItem
            {...getFieldProps('password')}
            placeholder="登录密码"
            type={passwordType}
            clear
            extra={<Eye type={passwordType} handleClick={() => togglePasswordType()} />}
          >
            <PngIcon width="32px" height="36px" icon="password" />
          </InputItem>
        ) : (
          <InputItem
            {...getFieldProps('code')}
            placeholder="请输入验证码"
            clear
            extra={<InviteBtn content="发送验证码" handleClick={sendVerify} />}
          >
            <PngIcon width="36px" height="32px" icon="vefiry" />
          </InputItem>
        )}
        <ForgetWrap>
          <Link to="/user/forget">忘记密码？</Link>
        </ForgetWrap>
        <BtnWrap>
          <Button onClick={submit}>登录</Button>
        </BtnWrap>
        <ToggleType onClick={handleToggle}>
          {loginType === 'pwd' ? '手机验证码登录' : '账号密码登录'}
        </ToggleType>
      </FormContent>
      <Read>
        已阅读并同意
        <Link to="/">《用户协议》</Link>
      </Read>
    </div>
  );
};

export default createForm()(Register);
/**
 * <InputItem
          {...getFieldProps("password")}
          placeholder="登录密码"
          type={passwordType}
          clear
          extra={
            <Eye type={passwordType} handleClick={() => togglePasswordType()}  />
          }>
          <PngIcon width="32px" height="36px" icon="password" />
        </InputItem>
 *
 */
