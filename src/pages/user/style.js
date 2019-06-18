import styled from 'styled-px2rem';

export const LogoBox = styled.div`
  width: 100%;
  height: auto;
  margin: 35px auto 45px;
  text-align: center;
`;

export const FormContent = styled.div`
  .am-list-item.am-input-item.am-list-item-middle {
    height: 100px;
    line-height: 100px;
  }
  .am-list-line {
    margin-right: 30px;
  }
  .am-list-item .am-input-label.am-input-label-5 {
    width: 40px;
    margin: 0 25px;
  }
  .am-list-item .am-input-extra {
    max-height: 52px;
  }
  .am-list-item .am-input-control input {
    font-size: 30px;
  }
`;
export const BtnWrap = styled.div`
  width: 420px;
  height: 90px;
  margin: 80px auto 0;
  .am-button {
    color: #fff;
    background: linear-gradient(to bottom, #7486fc, #4048f8);
    border-radius: 48px;
    height: 90px;
    line-height: 90px;
    &:before {
      display: none;
    }
    span {
      font-size: 30px;
    }
  }
`;

export const WidBtn = styled(BtnWrap)`
  margin-top: 80px;
  width: 310px;
`;

export const ToggleType = styled.div`
  text-align: center;
  color: #999;
  font-size: 24px;
  margin-top: 50px;
`;

export const Read = styled.div`
  text-align: center;
  color: #cccccc;
  font-size: 24px;
  margin-top: 100px;
`;

export const ForgetWrap = styled.div`
  text-align: right;
  margin-top: 15px;
  padding: 0 25px;
`;
