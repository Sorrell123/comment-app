interface DeviceType {
    mobile: number;
    tablet: number;
    desktop: number;
}

export const device: DeviceType = {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
}

interface BreakpointsTypes {
  mobile: string;
  tablet: string;
  desktop: string;
}

export const cssBreakPoint: BreakpointsTypes = {
    mobile: `(min-width: ${device.mobile}px)`,
    tablet: `(min-width: ${device.tablet}px)`,
    desktop: `(min-width: ${device.desktop}px)`
};

interface ColorsTypes {
    black: string;
    white: string;
    grey: string;
    darkGrey: string;
    lightGrey: string;
    mediumGrey: string;
    blue: string;
    darkBlue: string;
    darkerBlue: string;
    red: string;
    darkRed: string;
    darkerRed: string;
}

export const colors: ColorsTypes = {
    black: '#000',
    white: '#fff',
    grey: '#757575',
    darkGrey: '#1a1a1a',
    lightGrey: '#EEEEEE',
    mediumGrey: '#CCCCCC',
    blue: '#0082FA',
    darkBlue: '#0070cc',
    darkerBlue: '#003FCD',
    red: '#b4031c',
    darkRed: '#a30319',
    darkerRed: '#7a0010',
};
