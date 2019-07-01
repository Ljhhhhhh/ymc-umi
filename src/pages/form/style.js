import styled from 'styled-px2rem'

export const FormContent = styled.div `
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 30px;
  background: #FFF;
  padding-top: 120px;
  margin-bottom: 90px;
`

export const RadioWrap = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;
  .radio{
    display: flex;
    align-items: center;
    justify-content: center;
    i{
      background: #FFF;
      width: 16px;
      height: 16px;
      box-shadow: 0 0 0 2px #fff, 0 0 0 3px #7486FC;
      border-radius: 50%;
    }
    &.checked i{
      background: #7486FC;
    }
    span{
      font-size: 34px;
      margin-left: 8px;
      font-weight: 500;
    }
  }
`

export const InputLabel = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    position: relative;
    padding: 4px 16px 4px 12px;
    font-size: 32px;
    &:after{
      position: absolute;
      bottom: 2px;
      right: -0;
      content: '';
      border-top: 8px solid #333;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }
  }
`

export const PickerWrap = styled.div `
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  .picker-head{
    background: #FFF;
    width: 100%;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 32px;
    .ok{
      color: #7486FC;
    }
    .cancel{
      color: #999;
    }
  }
`
