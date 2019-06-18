import styled from 'styled-px2rem';
import { List } from 'antd-mobile';
import telphoneBannerBg from '../../assets/recharge/charge_bg.png';
import telCouponBg from '../../assets/recharge/tel-coupon_bg.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
  box-sizing: border-box;
  overflow: auto;
`;

export const AddCard = styled.div`
  width: 100%;
  height: 250px;
  border-color: #b3b2b3;
  padding: 0 60px;
  box-sizing: border-box;
  .title {
    line-height: 24px;
    font-size: 24px;
    color: #999999;
    font-weight: 300;
    position: relative;
    left: -20px;
    margin: 24px 0 20px;
  }
  .add-btn {
    width: 630px;
    height: 184px;
    margin: 0 auto;
    background: linear-gradient(to bottom, #7486fc, #4048f8);
    box-shadow: 0px 14px 28px 8px rgba(64, 72, 248, 0.5);
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      font-size: 30px;
      color: #fff;
      font-weight: 300;
      display: inline-block;
      line-height: 58px;
      box-sizing: border-box;
      text-align: center;
      border: 1px dashed #fff;
      padding: 0 30px;
      border-radius: 30px/50%;
      display: flex;
      align-items: center;
      span {
        margin-right: 10px;
      }
    }
  }
`;

export const SelectTicket = styled.div`
  height: auto;
  padding: 40px;
  box-shadow: ${props => props.shadow};
  position: relative;
  margin-top: -20px;
  background: #fff;
  .title {
    color: #999;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 40px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const TicketItem = styled.div`
  width: 200px;
  height: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  margin-bottom: 20px;
  .face {
    font-size: 32px;
    color: #333;
    line-height: 60px;
  }
  .pay {
    font-size: 24px;
    color: #333;
    font-weight: 400;
  }
  &.selected {
    background: #7486fc;
    border: none;
    .face,
    .pay {
      color: #fff;
    }
  }
`;

export const CouponWrap = styled(List)`
  min-height: 80px;
  margin: 20px 0;
  .am-list-body::before,
  .am-list-body::after {
    display: none !important;
  }
  .am-list-item {
    min-height: 80px;
  }
`;

export const CarouselWrap = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 40px 0;
  box-sizing: border-box;
  .slider-list {
    margin: 0 !important;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .slider-slide > img {
    height: 300px;
    margin: 0 auto;
    position: relative;
    width: auto;
    max-width: 600px;
    vertical-align: top;
  }
`;

export const UseLess = styled.span`
  color: #999999;
  font-size: 34px;
  font-weight: 500;
`;

export const CouponList = styled.div`
  width: 100%;
  height: auto;
  padding: 40px;
  box-sizing: border-box;
  max-height: calc(100% - 90px);
  overflow: auto;
`;

export const CouponItem = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  .head {
    width: 190px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      font-size: 48px;
      color: #333;
      text-align: center;
      font-weight: 600;
      line-height: 70px;
    }
    p {
      font-size: 24px;
      color: #666;
      text-align: center;
      font-weight: 400;
    }
  }
  .desc {
    line-height: 42px;
    .name {
      font-size: 30px;
      font-weight: 400;
      color: #333;
    }
    .time {
      font-size: 24px;
      font-weight: 400;
      color: #eb3f45;
    }
    .exp {
      font-size: 24px;
      font-weight: 400;
      color: #999999;
    }
  }
  .btn {
    width: 128px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    background: #eb3f45;
    margin-right: 26px;
  }
`;

export const CouponTelItem = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 32px;
  .head {
    width: 210px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url(${telCouponBg}) no-repeat;
    background-size: contain;
    background-position: center;
    color: #fff;
    font-size: 36px;
  }
  .desc {
    line-height: 42px;
    position: relative;
    transform: translateX(-50px);
    .name {
      font-size: 24px;
      font-weight: 400;
      color: #333;
    }
    .more {
      font-size: 24px;
      font-weight: 400;
      color: #bbb;
    }
  }
  .btn {
    width: 140px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    background: linear-gradient(to right, #7486fc, #4048f8);
    margin-right: 20px;
  }
`;

export const HeadBanner = styled.div`
  width: 100%;
  height: 270px;
  background: url(${telphoneBannerBg}) no-repeat;
  background-size: cover;
  .content {
    width: 710px;
    height: 115px;
    box-sizing: border-box;
    padding: 0 20px;
    border-radius: 8px;
    background: #fff;
    margin: 0 auto;
    transform: translate(0, 80px);
    box-shadow: 0px 4px 8px 0px rgba(242, 240, 246, 0.71);
    .am-tabs-default-bar {
      height: auto;
      .am-tabs-default-bar-content {
        display: flex;
        width: 100%;
      }
    }
    .am-list-line:after {
      display: none !important;
    }
    .am-list-item .am-input-label.am-input-label-5 {
      width: 50px;
      text-align: center;
    }
    .am-list-item .am-input-control input {
      font-size: 30px;
      color: #484848;
      font-weight: 400;
    }
    .am-tabs-default-bar-tab:after {
      top: 0 !important;
      bottom: auto !important;
    }
    .am-tabs-default-bar-underline {
      top: 0 !important;
      bottom: auto !important;
    }
  }
`;

export const TabWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 60px;
  .am-tabs-tab-bar-wrap {
    display: none;
  }
`;

export const ComboWrap = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 40px 0 20px;
  background: #fff;
  overflow-x: hidden;
  .header {
    font-size: 30px;
    line-height: 30px;
    color: #333;
    font-weight: 400;
    margin-bottom: 30px;
    padding: 0 40px;
    box-sizing: border-box;
  }
  .pre-recharge {
    padding: 0 40px;
    box-sizing: border-box;
    line-height: 34px;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-weight: 500;
    .set-val {
      width: 360px;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .control {
        display: block;
        width: 46px;
        height: 46px;
        background: ${props => props.theme.primaryColor};
        text-align: center;
        line-height: 46px;
        color: #fff;
        font-size: 36px;
        border-radius: 50%;
      }
      .val {
        font-size: 48px;
      }
    }
  }
  .am-slider-wrapper {
    padding: 60px 40px 90px;
    margin: 30px 40px 0;
  }
  .am-slider-handle {
    box-shadow: 0 0 0 4px #fff, 0 0 0 6px #ddd;
    background: #7486fc;
    margin-left: -16px;
    margin-top: -16px;
    width: 34px;
    height: 34px;
  }
  .am-slider-dot {
    background: #ddd;
    top: -10px;
  }
  .am-slider-dot-active {
    background: #fff;
  }
  .am-slider-mark-text {
    color: #999;
    &.am-slider-mark-text-active {
      color: #666666;
    }
  }
  .result {
    line-height: 90px;
    padding: 0 40px;
    font-size: 26px;
    color: #333;
    text-align: center;
    span {
      padding: 0 16px;
      font-size: 36px;
      font-weight: 600;
      color: ${props => props.theme.primaryColor};
    }
  }
  .reminder {
    line-height: 60px;
    padding: 0 40px;
    font-size: 24px;
    color: #999;
    text-align: right;
    background: #f5f5f5;
    font-weight: 400;
  }
`;
