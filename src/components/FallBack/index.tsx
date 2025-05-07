import styled from 'styled-components'
import { Loader } from '..'

const FallBackWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  height: calc(var(--vh,1svh) * 100);
  position: fixed;
  top: 0;
  left: 0;
`

export const FallBack = () => (
  <FallBackWrapper>
    <Loader show={true} transparent={true} />
  </FallBackWrapper>
)
