import React, { useState, useCallback } from 'react';
import { NavBar, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { FormContent, WidBtn } from './style.js';
import PngIcon from '../../components/PngIcon';
import Eye from '../../components/Eye';
import InviteBtn from '../../components/InviteBtn';
import GoBack from '../../components/GoBack';

const Register = props => {
  const [passwordType, setPasswordType] = useState('password');
  const { getFieldProps } = props.form;

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
        setPasswordType('text');
      } else {
        setPasswordType('password');
      }
    },
    [passwordType]
  );

  const sendVerify = useCallback(() => {
    console.log('发送验证码');
  }, []);

  return (
    <div>
      <NavBar mode="light" icon={<GoBack />}>
        找回密码
      </NavBar>
      <FormContent style={{ marginTop: 20 }}>
        <InputItem {...getFieldProps('mobile')} placeholder="手机号码" clear>
          <PngIcon width="32px" height="36px" icon="mobile" />
        </InputItem>
        <InputItem
          {...getFieldProps('code')}
          placeholder="请输入验证码"
          clear
          extra={<InviteBtn content="发送验证码" handleClick={sendVerify} />}
        >
          <PngIcon width="36px" height="32px" icon="vefiry" />
        </InputItem>
        <InputItem
          {...getFieldProps('password')}
          placeholder="请重设密码"
          type={passwordType}
          clear
          extra={<Eye type={passwordType} handleClick={() => togglePasswordType()} />}
        >
          <PngIcon width="32px" height="36px" icon="password" />
        </InputItem>
        <WidBtn>
          <Button onClick={submit}>下一步</Button>
        </WidBtn>
      </FormContent>
    </div>
  );
};

export default createForm()(Register);
