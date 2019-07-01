import React from 'react'
import { Button } from 'antd-mobile'
import styled from 'styled-px2rem'

const DefBtn = props => {
  const {content, handleClick, width = '80%'} = props;

  return (
    <ButtonWrap width={width}>
      <Button onClick={handleClick}>{content}</Button>
    </ButtonWrap>
  )
}

export default DefBtn;

const ButtonWrap = styled.div `
  width: ${props => props.width};
  height: 90px;
  margin: 0 auto;
  .am-button{
    background: linear-gradient(to bottom, #7486FC, #4048F8);
    color: #FFF;
    font-size: 30px;
    border: none;
    border-radius: 8px;
  }
`
