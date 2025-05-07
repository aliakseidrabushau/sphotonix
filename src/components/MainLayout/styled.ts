import styled, { css } from 'styled-components'
import { getCssSize } from '../../core/utils'

interface StyledLayoutProps {
  readonly $pt?: string | number;
  readonly $pb?: string | number;
}

export const StyledLayout = styled.div<StyledLayoutProps>(
  ({ $pt, $pb }) => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    ${$pt !== undefined && `padding-top: ${getCssSize($pt)}`};
    ${$pb !== undefined && `padding-bottom: ${getCssSize($pb)}`};
    padding-left: 16px;
    padding-right: 16px;
    max-width: 375px;

    & > * {
      width: 100%;
    }
  `
)
