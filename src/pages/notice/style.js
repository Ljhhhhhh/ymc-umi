import styled from 'styled-px2rem';

export const Container = styled.div`
  width: 100%;
  height: auto;
  .ratina-bd.am-navbar:before {
    border-color: #e6e6e6;
  }
  .title {
    font-size: 32px;
    font-weight: 500;
    color: #000;
    text-align: center;
    margin: 60px auto 30px;
  }
  .time {
    font-size: 24px;
    color: #999;
    font-weight: 400;
    text-align: center;
  }
  .content {
    margin: 50px 40px;
    padding-top: 50px;
    color: #999;
    font-size: 28px;
    line-height: 36px;
  }
  .footer {
    text-align: right;
    margin: 30px 40px;
    p {
      color: #999;
      font-size: 28px;
      line-height: 56px;
    }
  }
`;
