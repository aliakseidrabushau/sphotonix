import * as S from './styled'

export interface MainLayoutProps {
  children?: any;
  pt?: string | number;
  pb?: string | number;
}

export const MainLayout = ({
  children,
  pt = 16,
  pb = 16,
}: MainLayoutProps) => (
  <S.StyledLayout
    $pt={pt}
    $pb={pb}
  >
    {children}
  </S.StyledLayout>
)
