import styled from 'styled-components'

export const Title = styled.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`

export const Quote = styled.div`
  margin-top: 16px;
  font-size: 17px;
  line-height: 26px;
  color: #DBDBDB;
`

export const PressLogos = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PressLogo = styled.div<{ $img: string }>`
  width: 100%;
  height: 74px;
  background-image: url(${({ $img }) => `./assets/press/${$img}.png`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  &:not(:first-child) {
    margin-top: 8px;
  }
`
