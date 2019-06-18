import styled from 'styled-components';

export const Btn = styled.div`
  border-radius: 26px;
  font-size: 24px;
  line-height: 50px;
  box-sizing: border-box;
  color: #7486fc;
  border: 1px solid #7486fc;
  padding: 0 22px;
  min-width: 150px;
  text-align: center;
  &.disabled {
    color: #cfcfcf;
    border: 1px solid #cfcfcf;
  }
`;
