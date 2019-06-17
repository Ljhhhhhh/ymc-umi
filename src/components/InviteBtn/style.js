import styled from 'styled-components';

export const Btn = styled.div `
	border-radius: 13px;
	font-size: 12px;
	line-height: 25px;
	box-sizing: border-box;
	color: #7486FC;
	border: 1px solid #7486FC;
	padding: 0 11px;
  min-width: 75px;
  text-align: center;
  &.disabled{
    color: #cfcfcf;
    border: 1px solid #cfcfcf;
  }
`