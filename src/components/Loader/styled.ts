import styled, { keyframes, css } from 'styled-components';

export const spinning = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

interface StyledSpinnerProps {
  $transparent: boolean;
  $localPosition: boolean;
  $customStyles?: string;
}

export const StyledSpinner = styled.div<StyledSpinnerProps>(
  ({ $transparent, $localPosition, $customStyles }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    ${!$transparent && 'background-color: rgba(0,0,0,.3)'};
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: 1000;

    ${$localPosition && css`
      position: absolute;
      background-color: transparent;
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      padding: 8px;
    `};

    ${$customStyles};
  `
);

export const StyledSVG = styled.svg<{ $fill?: string; $customStyles?: string }>(
  ({ $fill, $customStyles }) => css`
    width: 48px;
    height: 48px;
    animation: ${spinning} 1.5s linear infinite;

    circle, path {
      fill: ${$fill};
    }

    ${$customStyles};
  `
);

export const Message = styled.span`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  white-space: break-spaces;
  margin-top: 32px;
`;
