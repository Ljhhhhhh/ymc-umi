import React from 'react';
import styled from 'styled-px2rem';

const BuyView = props => {
  const { face, pay, id } = props.data;
  return face && id !== -1 ? (
    <Balance>
      <div className="count">
        <div className="label">总计</div>
        <div className="price">¥{face}</div>
        <div className="sale">
          (省
          {(face - pay).toFixed(2)})
        </div>
      </div>
      <div className="btn">立即充值</div>
    </Balance>
  ) : null;
};

const Balance = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  .count {
    margin-left: 40px;
    line-height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .label {
      font-size: 30px;
      color: #333;
      font-weight: 400;
      margin-right: 26px;
    }
    .price {
      font-size: 36px;
      color: #333;
      font-weight: 500;
    }
    .sale {
      font-size: 24px;
      color: #7486fc;
      font-weight: 400;
    }
  }
  .btn {
    width: 280px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #fff;
    background: linear-gradient(to bottom, #7486fc, #4048f8);
  }
`;

export default BuyView;
