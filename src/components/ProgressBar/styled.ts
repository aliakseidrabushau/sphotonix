import styled from 'styled-components'

export const StyledContainer = styled.div<{ $width: string }>`
  display: flex;
  align-items: center;
  max-width: 343px;
  height: 8px;
  width: calc(100% - 48px);
  position: fixed;
  top: 19px;
  left: 50%;
  transform: translateX(-50%);
  ${({ $width }) => `
    background-image: linear-gradient(90deg, #EB1E1E 0, #EB1E1E ${$width}, #fff ${$width}, #fff 100%);
  `};
`;
