import styled from 'styled-components'

export const StyledButton = styled.button<{ $customStyles: string }>`
  display: block;
  width: 100%;
  max-width: 343px;
  height: 50px;
  flex-shrink: 0;
  background-color: #EB1E1E;
  border-radius: 8px;
  border: none;
  padding: 0 10px;
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  ${({ $customStyles }) => $customStyles};
`
