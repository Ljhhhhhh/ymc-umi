import styled from 'styled-px2rem';
import { Link } from 'react-router-dom';
import discountBg1 from '../../assets/discount_big_bg.png';

export const Container = styled.div`
  max-height: 100%;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 100px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .am-carousel-wrap {
    margin-top: -100px;
  }
`;

export const NotiveWrap = styled.div`
  width: 690px;
  height: 80px;
  border-radius: 50px;
  line-height: 80px;
  background: #fff;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px #c0c6f1;
  .am-notice-bar {
    line-height: 80px;
    height: 100%;
    background: transparent;
    color: #7486fc;
  }
  .am-notice-bar-marquee {
    font-size: 24px;
  }
`;

export const MenuWrap = styled.div`
  margin-top: -30px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-around;
  a {
    text-align: center;
    color: #333;
    div {
      margin-top: 10px;
    }
  }
`;

export const CardWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 0 30px;
  box-sizing: border-box;
  .card_big {
    width: 100%;
    height: 210px;
    box-sizing: border-box;
    background-size: cover;
    background-image: url(${discountBg1});
    color: #fff;
    padding: 30px 40px;
    line-height: 46px;
    display: block;
    .title {
      font-size: 34px;
      font-weight: 500;
    }
    .sub_title {
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 6px;
    }
    .btn {
      width: 180px;
      text-align: center;
      line-height: 46px;
      box-sizing: border-box;
      border: 1px solid #fff;
      border-radius: 26px;
      margin-top: 10px;
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const CardList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DisItem = styled(Link)`
  width: 48%;
  height: auto;
  display: flex;
  align-items: center;
  background-size: 100% 100%;
  padding: 26px 20px 12px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 20px;
  .desc {
    text-align: center;
    .price {
      font-size: 28px;
      font-weight: 500;
      line-height: 48px;
      color: ${props => props.theme.theme};
    }
    .sub {
      font-size: 24px;
      line-height: 28px;
      color: ${props => props.theme.assist};
    }
    .badge {
      font-size: 24px;
      line-height: 28px;
      height: 28px;
      color: #fff;
      background: ${props => props.theme.theme};
      display: inline-block;
      border-radius: 20px;
      padding: 0 14px;
    }
  }
  .corner {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    font-size: 24px;
    transform: rotate(45deg) translate(16px, 5px);
  }
`;

export const ItemTitle = styled.div`
  width: auto;
  height: auto;
  margin: 35px 30px 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
  color: #333;
  line-height: 34px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 34px;
    background: ${props => props.color};
  }
  .bold {
    font-size: 34px;
    font-weight: 500;
    padding-left: 22px;
  }
  a {
    color: #333;
    font-size: 30px;
    position: relative;
    padding-right: 30px;
    &:after {
      content: '';
      position: absolute;
      right: 0px;
      top: 0;
      width: 0;
      height: 0;
      border: 14px solid #333;
      border-top: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid transparent;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const Featured = styled.div`
  width: auto;
  height: auto;
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    display: block;
    font-size: 0;
    width: 334px;
    &:first-child {
      min-width: 100%;
      margin-bottom: 20px;
    }
    img {
      width: 100%;
    }
  }
`;
export const ProductList = styled.div`
  width: auto;
  height: auto;
  margin: 0 30px;
`;
export const Product = styled(Link)`
  display: block;
  width: auto;
  height: auto;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: auto;
  }
  .p_title {
    width: 100%;
    line-height: 70px;
    color: #333;
    font-size: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sub {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      color: #ff0009;
      font-size: 30px;
    }
    .sold {
      color: #999;
      font-size: 30px;
      font-weight: 200;
    }
  }
`;
