export const verseColors = {
  verseBlue: '#0085FF',
  verseLightGray: '#959595',
  verseMidGray: '#8D8D8D',
  verseGrayBrown: '#4B4B4B',
  verseGray: '#424242',
  verseAlmostBlack: '#071921',
  verseBlack: '#050F15',
  verseNavyBlue: '#1A202E',
  verseGrayBlue: '#101624',
  verseDarkBlue: '#001C36',
  verseDarkGrayBlue: '#001C36',
};

export const shades = {
  shade0: '#000000',
  shade10: '#030c14',
  shade20: '#0f1823',
  shade30: '#1a2231',
  shade40: '#252d40',
  shade50: '#313e57',
  shade60: '#425472',
  shade70: '#586f91',
  shade80: '#899bb5',
  shade90: '#c5cedb',
  shade100: '#ffffff',
};

export const baseColors = {
  white: '#ffffff',
  offWhite: '#FAFAFA',
  black: '#000000',

  primaryBlue25: '#163756',
  primaryBlue50: '#0f518f',
  primaryBlue75: '#086bc6',
  primaryBlue100: '#0085ff',
  green25: '#023a32',
  green50: '#016850',
  green75: '#01966e',
  green100: '#00c48b',
  yellow25: '#342716',
  yellow50: '#654319',
  yellow75: '#975e1b',
  yellow100: '#c87a1e',
  red25: '#2c0d1a',
  red50: '#540f20',
  red75: '#7d1026',
  red100: '#a6112c',

  gradientPrimary: 'linear-gradient(180deg, #0ebef0 0%, #0085ff 100%)',
  gradientPrimaryHover: 'linear-gradient(180deg, #31c9f4 0%, #2c96f6 100%)',
  gradientPrimaryActive: 'linear-gradient(180deg, #0189fe 0%, #2c96f6 100%)',
  gradientSecondary: 'linear-gradient(180deg, #425472 0%, #313e57 100%)',
  gradientSecondaryHover: 'linear-gradient(180deg, #586f91 0%, #425472 100%)',
  gradientSecondaryActive: 'linear-gradient(180deg, #334059 0%, #425371 100%)',
};

// @TODO: remove when we kill off all old designs 😈
export const nekoColors = {
  semiDark: '#657089',
  bluePrimary: '#3B97FF',
  semiLight: '#C8CDD8',
  almostBlack: '#131720',
  light: '#E9EBEF',
  yellowLightest: '#FDF0DB',
  blueLightest: '#E0F2FC',
  primary: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAANSURBVAgdY+A62PcfAASLAlkLqvfVAAAAAElFTkSuQmCC')`,
  red: '#E23F2F',
  blueLight: '#2FA9EE',
  walletGreen: '#0AC18E',
  walletGray: '#C8CDD8',
  walletCyan: '#2FA9EE',
  primaryFallback: '#00C58C',
};

export const colors = {
  ...baseColors,
  ...verseColors,
  ...shades,
  ...nekoColors,
};
