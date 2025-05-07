import * as S from './styled';

interface CustomStylesProps {
  readonly container?: string;
  readonly svg?: string;
}

export interface SvgProps {
  type?: 'dotted' | 'solid';
  fill?: string;
  [propName: string]: any;
}

export interface LoaderProps extends SvgProps {
  show?: boolean;
  message?: string;
  transparent?: boolean;
  localPosition?: boolean;
  customStyles?: CustomStylesProps;
}

const SpinnerSvg = ({ type, ...rest }: SvgProps) => {
  switch (type) {
    case 'dotted': return (
      <S.StyledSVG width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
        <circle cx='24.5' cy='4' r='4' transform='rotate(90 24.5 4)' />
        <circle cx='24.5' cy='44' r='4' transform='rotate(90 24.5 44)' fillOpacity='0.3' />
        <circle opacity='0.15' cx='44.5' cy='24' r='4' transform='rotate(90 44.5 24)' />
        <circle cx='4.5' cy='24' r='4' transform='rotate(90 4.5 24)' fillOpacity='0.65' />
        <circle opacity='0.2' cx='38.642' cy='38.1421' r='4' transform='rotate(135 38.642 38.1421)' />
        <circle cx='10.3578' cy='9.85779' r='4' transform='rotate(135 10.3578 9.85779)' fillOpacity='0.85' />
        <circle cx='10.3579' cy='38.1421' r='4' transform='rotate(-135 10.3579 38.1421)' fillOpacity='0.5' />
        <circle opacity='0.05' cx='38.6421' cy='9.85779' r='4' transform='rotate(-135 38.6421 9.85779)' />
      </S.StyledSVG>
    );
    case 'solid': return (
      <S.StyledSVG width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
        <path d='M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM6.38657 24C6.38657 33.7276 14.2724 41.6134 24 41.6134C33.7276 41.6134 41.6134 33.7276 41.6134 24C41.6134 14.2724 33.7276 6.38657 24 6.38657C14.2724 6.38657 6.38657 14.2724 6.38657 24Z' fillOpacity='0.5' />
        <path d='M24 3.19329C24 1.42968 25.436 -0.0218585 27.184 0.21211C31.2157 0.751748 35.0628 2.31025 38.3511 4.76341C42.4966 7.85606 45.5321 12.2051 47.0055 17.1628C48.4789 22.1205 48.3114 27.4215 46.5279 32.2762C45.1131 36.1271 42.7417 39.5338 39.6591 42.1878C38.3226 43.3384 36.3269 42.9068 35.3637 41.4294C34.4005 39.9521 34.843 37.9919 36.1224 36.7781C38.0786 34.9223 39.5934 32.6316 40.533 30.0739C41.8419 26.511 41.9649 22.6206 40.8836 18.9822C39.8022 15.3438 37.5745 12.1521 34.5322 9.88241C32.3481 8.25305 29.8282 7.16147 27.1759 6.67524C25.4412 6.35723 24 4.95689 24 3.19329Z' />
      </S.StyledSVG>
    );
    default: return null;
  }
}

export const Loader = ({
  show = true,
  message,
  transparent = false,
  type = 'dotted',
  fill,
  localPosition = false,
  customStyles = {},
  ...rest
}: LoaderProps) => {
  const theme = rest?.theme;

  if (show) {
    return (
      <S.StyledSpinner
        id={!localPosition ? 'loading-element' : ''}
        $transparent={transparent}
        theme={theme}
        $localPosition={localPosition}
        $customStyles={customStyles?.container}
        {...rest}
      >
        <SpinnerSvg
          {...{ type, theme }}
          $fill={fill}
          $customStyles={customStyles?.svg}
        />
        {!localPosition && message && <S.Message theme={theme}>{message}</S.Message>}
      </S.StyledSpinner>
    );
  }

  return null;
};
