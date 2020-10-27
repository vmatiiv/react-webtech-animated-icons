import React from 'react';
import styled, { keyframes } from 'styled-components';
import IconProps from '../Icon.type';

const dashArray = (endColor:string) => keyframes`
    0% {
        stroke-dasharray:0;
        stroke:currentColor
        }
    100% {
        stroke-dasharray:100;
        stroke:${endColor}
        }
`;
interface Halo {
    endColor:string;
    dur:number;
}
const Svg = styled.svg<Halo>`
    &:hover{
        g{
            animation:  ${(props) => dashArray(props.endColor)} ${(props) => `${props.dur}s`} ease-in-out forwards;
        
        } 
    }
`;
function ReactIcon({
  firstColor, secondColor, size, strokeWidth, duration, ...rest
}:IconProps) {
  return (
    <Svg
      dur={duration}
      height={size}
      width={size}
      endColor={firstColor}
      viewBox="0 0 32 32"
      {...rest}
    >

      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="0">
        <ellipse cx="16" cy="15" rx="15" ry="6" />
        <ellipse cx="16" cy="15" rx="15" ry="6" transform="rotate(60, 16, 15)" />
        <ellipse cx="16" cy="15" rx="15" ry="6" transform="rotate(120, 16, 15)" />
        <circle cx="16" cy="15" r="3" />
      </g>
    </Svg>
  );
}

ReactIcon.defaultProps = {
  firstColor: '#663399',
  secondColor: '#fff',
  size: 32,
  duration: 1,
  strokeWidth: 1,
};

export default ReactIcon;
