import React, { useState, useCallback } from "react";
import axios from "axios";
import { Toast } from "antd-mobile";
import { errorToast } from "../../utils";
import styles from "./index.less";

const InviteBtn = props => {
  const { validateFields, fields, api } = props;
  const defaultContent = props.content || "发送验证码";
  const defaultRestTime = props.restTime || 60;
  const [restTime, setRestTime] = useState(0);

  const doClick = useCallback(async () => {
    const vali = errorToast(validateFields, fields);
    if (!vali) return vali;
    const res = await axios.post(api);
    if (res.data.code === 0) {
      let rt = defaultRestTime;
      setRestTime(rt);
      const timer = setInterval(() => {
        if (--rt === 0) {
          setRestTime(rt);
          clearTimeout(timer);
        } else {
          setRestTime(rt);
        }
      }, 1000);
    } else {
      Toast.fail("发送验证码失败，请重试");
      return false;
    }
  }, [validateFields, fields, api, defaultRestTime]);

  return restTime ? (
    <div className="disabled" className={styles.btn}>{restTime}</div>
  ) : (
    <div className={styles.btn} onClick={doClick}>{defaultContent}</div>
  );
};

export default InviteBtn;
