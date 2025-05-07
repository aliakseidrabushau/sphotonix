import styled from 'styled-components'

export const Title = styled.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`

export const Subtitle = styled.div`
  margin-top: 8px;
  font-size: 17px;
  line-height: 26px;
  color: rgba(219, 219, 219, 1);
`

export const List = styled.div`
  margin-top: 32px;
`

export const ListItem = styled.div`
  padding: 28px 20px 12px;
  border-radius: 12px;
  border: 1px solid #5D638F;
  background-color: #404464;
  position: relative;

  &:not(:first-child) {
    margin-top: 8px;
  }
`

export const ListItemYear = styled.div`
  position: absolute;
  top: 12px;
  left: 24px;
  font-size: 12px;
  line-height: 16px;
  color: #8A8FB2;
`

export const ListItemText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
  color: #C9CCE2;
  text-align: left;

  .big {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: #C9CCE2;
    margin-right: 12px;
  }
`
