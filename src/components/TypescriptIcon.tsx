import React from 'react';
import styled, { keyframes } from 'styled-components';
import IconProps from '../Icon.type';

const radius = keyframes`
  0%{r:0;}
  100%{r:35;}
`;
interface ISvg {
    readonly dur: number;
  }

const Svg = styled.svg<ISvg>`
    &:hover{
        & circle{
      animation: ${radius} ${(props) => `${props.dur}s`} ease forwards;

        }
    }
`;
function TypescriptIcon({
  firstColor, secondColor, strokeWidth, size, duration, ...rest
}:IconProps) {
  return (
    <Svg
      fill="currentColor"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      height={size}
      dur={duration}
      className="icon"
      width={size}
      {...rest}
    >
      <title />

      <rect
        x="0"
        y="0"
        width="24"
        height="24"
      />
      <circle r="0" fill={firstColor} cx="0" cy="0" />
      <text fill={secondColor} x="5" y="22" fontFamily="monospace" fontWeight="bolder" fontSize="15">TS</text>

    </Svg>
  );
}

TypescriptIcon.defaultProps = {
  firstColor: '#007ACC',
  secondColor: '#fff',
  size: 32,
  duration: 1,
  strokeWidth: 0,
};

export default TypescriptIcon;
