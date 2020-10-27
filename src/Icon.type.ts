/* eslint-disable semi */
import React from 'react'

/* eslint-disable no-extra-semi */
export default interface IconProps extends React.HTMLAttributes<SVGElement> {
    firstColor?:string,
    secondColor?:string,
    size?:number,
    duration?:number,
    strokeWidth:number
};
