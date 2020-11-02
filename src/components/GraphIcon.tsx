import React from 'react';
import styled, { keyframes } from 'styled-components';
import IconProps from '../Icon.type';

interface ISvg{
    dur:number,
    firstColor:string,
    secondColor:string
}
const changeColor = (endColor:string) => keyframes`
    0% {
        fill:currentColor
        }
    100% {
        fill:${endColor}
        }
`;
const sideLines = (start:number, end:number, endColor:string) => keyframes`
    0%{
        stroke-dashoffset:${start};
    }
    100%{
        stroke:${endColor};
        stroke-dashoffset:${end};
    }
`;
const Svg = styled.svg<ISvg>`

    &:hover{
        & g:nth-child(1){
            animation:${(props) => sideLines(0, 400, props.secondColor)} ${(props) => `${props.dur}s`} ease forwards;
        }
        & path{
            animation:${(props) => sideLines(0, 800, props.secondColor)} ${(props) => `${props.dur + 1}s`} ease forwards;
        }
        & circle{
            animation:${(props) => changeColor(props.firstColor)} ${(props) => `${props.dur}s`} ease forwards;
        }
    }
`;
function GraphIcon({
  firstColor, secondColor, size, duration, ...rest
}:IconProps) {
  return (
    <Svg firstColor={firstColor} secondColor={secondColor} viewBox="0 0 320 320" width={size} height={size} dur={duration} {...rest}>
      <g stroke="currentColor" fill="currentColor" strokeDasharray="200" strokeDashoffset="0">
        <line strokeWidth="10" x1="50" x2="160" y1="225" y2="30" />
        <line strokeWidth="10" x1="50" x2="273" y1="225" y2="225" />
        <line strokeWidth="10" x1="273" x2="50" y1="225" y2="225" />
        <line strokeWidth="10" x1="273" x2="160" y1="225" y2="30" />
      </g>
      <g stroke="currentColor" fill="currentColor">
        <path
          stroke="currentColor"
          fill="none"
          strokeWidth="10"
          strokeDasharray="400"
          d="M160,30 L50,90 L50,220 L160,290"
        />

        <path
          stroke="currentColor"
          fill="none"
          strokeWidth="10"
          strokeDasharray="400"
          d="M160,290 L273,220 L273,90 L160,30"
        />

        <circle r="28" cx="273" cy="95" />

        <circle r="28" cx="50" cy="95" />

        <circle r="28" cx="50" cy="225" />

        <circle r="28" cx="273" cy="225" />

        <circle r="28" cx="160" cy="290" />

        <circle r="28" cx="160" cy="30" />

      </g>

    </Svg>
  );
}
GraphIcon.defaultProps = {
  firstColor: '#663399',
  secondColor: '#663399',
  size: 32,
  duration: 2,
  strokeWidth: 0,
};
export default GraphIcon;
