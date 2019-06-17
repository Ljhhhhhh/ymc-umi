import React, {useState, useCallback} from "react";
import { NavBar, InputItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
import {Link} from 'react-router-dom'
import PngIcon from '../../../components/PngIcon'
import Eye from '../../../components/Eye'
import Logo from "../../../components/Logo/Logo";
import InviteBtn from "../../../components/InviteBtn";
import GoBack from "../../../components/GoBack";
import styles from './index.less'


const Register = props => {
  const [passwordType, setPasswordType] = useState('password')
  const { getFieldProps, validateFields } = props.form;

  const submit = useCallback(() => {
    validateFields((err, val) => {
      console.log(err, val);
    })
    const data = props.form.getFieldsValue();
    console.log(data);
  }, [props.form, validateFields])

  const togglePasswordType = useCallback(() => {
    if (passwordType === 'password') {
      setPasswordType('text')
    } else {
      setPasswordType('password')
    }
  }, [passwordType])

  return (
    <div>
      <NavBar
        mode="light"
        icon={<GoBack/>}
        rightContent={<Link to="/login">登录</Link>}>
        注册
      </NavBar>
      <div className={styles.logo_box}>
        <Logo />
      </div>
      <div className={styles.form_content}>
        <InputItem
          {...getFieldProps("mobile", {
            rules: [{required: true, message: '手机号码必填'}, {pattern: /^1[34578]\d{9}$/, message: '手机号码输入错误'}]
          })}
          placeholder="手机号码"
          clear>
          <PngIcon width="32px" height="36px" icon="mobile" />
        </InputItem>
        <InputItem
          {...getFieldProps("password", {
            rules: [{required: true, message: '密码必填'}, {min: 6, max: 16, message: '密码长度在6-16位之间'}]
          })}
          placeholder="请设置一个最少6位的密码"
          type={passwordType}
          clear
          extra={
            <Eye type={passwordType} handleClick={() => togglePasswordType()}  />
          }>
          <PngIcon width="32px" height="36px" icon="password" />
        </InputItem>
        <InputItem
          {...getFieldProps("code", {
            rules: [{required: true, message: '验证码必填'}]
          })}
          placeholder="请输入验证码"
          clear
          extra={
            <InviteBtn validateFields={validateFields} fields='mobile' api='https://www.easy-mock.com/mock/5ca2128e0aa7bf50eb36bcc0/code'/>
          }>
          <PngIcon width="36px" height="32px" icon="vefiry" />
        </InputItem>
        <InputItem
          {...getFieldProps("invite")}
          placeholder="请输入邀请人手机号(选填)"
          clear>
          <PngIcon width="38px" height="36px" icon="invite" />
        </InputItem>
        <div className={styles.btn_wrap}>
          <Button onClick={submit}>注册领取新人福利</Button>
        </div>
      </div>
      <div className={styles.read}>已阅读并同意<Link to='/'>《用户协议》</Link></div>
    </div>
  );
};

export default createForm()(Register);
