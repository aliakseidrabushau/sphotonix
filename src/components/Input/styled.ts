import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.7);
  background: transparent;
  padding: 12px 16px;
  font-size: 17px;
  line-height: 26px;
  color: #fff;
  text-align: left;
  position: relative;

  &:focus,
  &:active {
    outline: none;
    border: none;
  }
  
  &::placeholder {
    opacity: .4;
  }
`