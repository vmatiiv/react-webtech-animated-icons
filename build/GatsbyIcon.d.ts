/// <reference types="react" />
declare type GatsbyIconProps = {
    firstColor?: string;
    secondColor?: string;
    size?: number;
    rest?: object;
    duration?: number;
};
declare function GatsbyIcon({ firstColor, secondColor, size, duration, ...rest }: GatsbyIconProps): JSX.Element;
declare namespace GatsbyIcon {
    var defaultProps: {
        firstColor: string;
        secondColor: string;
        size: number;
        rest: {};
        duration: number;
    };
}
export default GatsbyIcon;
