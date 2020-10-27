import React from 'react';
import styled, { keyframes } from 'styled-components';
import IconProps from '../Icon.type';

const dashArray = (color:string) => keyframes`
    0%{
        stroke-dasharray:90px;
        stroke-dashoffset:90px;
        stroke:${color};
        
    }
    99%{
        stroke:${color};

        fill:currentColor;
    }
    100%{
        fill:${color};
        stroke-dasharray:66px;
        stroke-dashoffset:0.27px;
        stroke:${color};

    }
`;
interface ISvg {
    readonly dur:number,
    readonly firstColor:string
}
const Svg = styled.svg<ISvg>`
    &:hover{
        & path:nth-child(1){
            animation: ${(props) => dashArray(props.firstColor)} ${(props) => `${props.dur}s`} ease forwards;
        }
    }
`;

function HTMLIcon({
  firstColor, secondColor, size, strokeWidth, duration, ...rest
}:IconProps) {
  return (
    <Svg
      fill="currentColor"
      version="1.1"
      viewBox="0 0 32 32"
      height={size}
      width={size}
      dur={duration}
      firstColor={firstColor}
      {...rest}

    >
      <path
        d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578  2.065-23.172h-22.671z"
        strokeDasharray="90px"
        strokeDashoffset="30px"
      />
      <path
        fill={secondColor}
        d="M8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z"
      />
    </Svg>
  );
}
HTMLIcon.defaultProps = {
  firstColor: 'orange',
  secondColor: '#fff',
  size: 32,
  duration: 1,
  strokeWidth: 1,
};

export default HTMLIcon;
