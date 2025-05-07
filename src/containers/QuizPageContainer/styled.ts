import styled, { css } from 'styled-components'

export const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: left;
  white-space: pre-line;
`

export const Subtitle = styled.div`
  font-size: 18px;
  line-height: 28px;
  text-align: left;
  white-space: pre-line;
  color: #C9CCE2;
  margin-top: 16px;
`

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`

export const OptionsItem = styled.div<{ $multiChoice?: boolean; $isActive?: boolean }>(
  ({ $multiChoice, $isActive }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    font-size: 17px;
    line-height: 26px;
    text-align: left;
    white-space: pre-line;
    transition: .3s;
    cursor: pointer;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;
    ${$multiChoice && 'padding-left: 56px;'};
    background-color: ${$isActive ? 'rgba(181, 43, 43, 0.4)' : 'rgba(255, 255, 255, 0.2)'};
    border: 1px solid ${$isActive ? 'rgba(255, 191, 191, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
    position: relative;

    &:not(:first-child) {
      margin-top: 8px;
    }
  `
)

export const StyledCheckIcon = styled.div<{ $isActive: boolean }>(
  ({ $isActive }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid ${$isActive ? 'rgba(247, 65, 65, 1)' : 'rgba(246, 246, 246, 1)'};
    background-color: ${$isActive ? 'rgba(247, 65, 65, 1)' : 'transparent'};
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: background-color .3s;
  `
)

export const StyledRadioIcon = styled.div<{ $isActive: boolean }>(
  ({ $isActive }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${$isActive ? 6 : 1}px solid ${$isActive ? 'rgba(247, 65, 65, 1)' : 'rgba(246, 246, 246, 1)'};
    background-color: ${$isActive ? '#fff' : 'transparent'};
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: background-color .3s;
  `
)
