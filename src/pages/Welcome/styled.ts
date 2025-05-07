import styled from 'styled-components'

export const Logo = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 100px;
  flex-shrink: 0;
  background-image: url(${'./assets/logo.png'});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

export const Title = styled.div`
  margin-top: 95px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  white-space: pre-line;
`

export const Subtitle = styled.div`
  margin-top: 16px;
  font-size: 17px;
  line-height: 26px;
  white-space: pre-line;
  color: #DBDBDB;
`
