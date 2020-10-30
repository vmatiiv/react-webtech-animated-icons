import React from 'react';
import styled, { keyframes } from 'styled-components';
import IconProps from '../Icon.type';

const changeColor = (endColor:string) => keyframes`
    0% {
        fill:currentColor
        }
    100% {
        fill:${endColor}
        }
`;
const firstElement = keyframes`
    0%{
        transform:translate(0,0);
    }
    25%{
        transform:translate(5px,5px);
    }
    50%{
        transform:translate(10px,10px);
    }
    75%{
        transform:translate(5px,5px);
    }
    100%{
        transform:translate(0,0);
    }
`;

const secondElement = keyframes`
    0%{
        transform:translate(0,0);
    }
    25%{
        transform:translate(-5px,5px);
    }
    50%{
        transform:translate(-10px,10px);
    }
    75%{
        transform:translate(-5px,5px);
    }
    100%{
        transform:translate(0,0);
    }
`;

const thirdElement = keyframes`
    0%{
        transform:translate(0,0);
    }
    25%{
        transform:translate(0,-5px);
    }
    50%{
        transform:translate(0,-10px);
    }
    75%{
        transform:translate(0,-5px);
    }
    100%{
        transform:translate(0,0);
    }
`;
interface ISvg {
  readonly firstColor: string;
  readonly secondColor: string;
  readonly dur: number;
}
const Svg = styled.svg<ISvg>`


    &:hover{

        & g path:nth-child(1){
          animation:  ${(props) => changeColor(props.firstColor)} ${(props) => `${props.dur}s`} ease forwards;

        }
        & g path:nth-child(2){
          animation:  ${(props) => changeColor(props.secondColor)} ${(props) => `${props.dur}s`} ease forwards;

        }
        & g:nth-child(1){
          animation: ${firstElement} ${(props) => `${props.dur}s`} linear;
        }
        & g:nth-child(2){
          animation: ${secondElement} ${(props) => `${props.dur}s`} linear;
        }
        & g:nth-child(3){
          animation: ${thirdElement} ${(props) => `${props.dur}s`} linear;
        }
    }
`;

function WebpackIcon({
  firstColor, secondColor, size, duration, ...rest
}:IconProps) {
  return (

    <Svg secondColor={secondColor} firstColor={firstColor} dur={duration} width={size} height={size} viewBox="0 0 255 280" {...rest}>

      <g fill="currentColor">
        <path d="M233.153208,212.286792 L132.250566,269.427925 L132.250566,224.990189 L195.139623,190.357736 L233.153208,212.286792 Z M240.060377,206.055849 L240.060377,86.6535849 L203.157736,107.954717 L203.157736,184.754717 L240.060377,206.055849" />
        <path d="M132.250566,214.846792 L194.270189,180.74566 L194.270189,113.123019 L132.250566,148.914717 L132.250566,214.846792 Z" />
      </g>

      <g fill="currentColor">

        <path d="M22.4603774,212.286792 L123.363019,269.379623 L123.363019,224.941887 L60.4739623,190.357736 L22.4603774,212.286792 L22.4603774,212.286792 Z M15.5532075,206.055849 L15.5532075,86.6535849 L52.4558491,107.954717 L52.4558491,184.754717 L15.5532075,206.055849 L15.5532075,206.055849 Z " />
        <path d="M123.363019,214.846792 L61.3433962,180.697358 L61.3433962,113.123019 L123.363019,148.914717 L123.363019,214.846792 L123.363019,214.846792 Z " />

      </g>

      <g fill="currentColor">
        <path d=" M19.8520755,78.925283 L123.363019,20.3833962 L123.363019,63.3720755 L57.0445283,99.84 L56.5132075,100.129811 L19.8520755,78.925283 L19.8520755,78.925283 Z M235.713208,78.925283 L132.250566,20.3833962 L132.250566,63.3720755 L198.520755,99.8883019 L199.052075,100.178113 L235.713208,78.925283 L235.713208,78.925283 Z" />
        <path d=" M65.4973585,105.298113 L127.806792,71.0520755 L190.067925,105.298113 L127.806792,141.234717 L65.4973585,105.298113 L65.4973585,105.298113 Z" />

      </g>
    </Svg>
  );
}

WebpackIcon.defaultProps = {
  firstColor: '#1C78C0',
  secondColor: '#8ED6FB',
  size: 32,
  duration: 1,
  strokeWidth: 0,
};

export default WebpackIcon;
