import { createGlobalStyle } from 'styled-components';
import RobotoBoldWoff from '../assets/fonts/Roboto/Roboto-Bold.woff';
import RobotoBoldWoff2 from '../assets/fonts/Roboto/Roboto-Bold.woff2';
import RobotoMediumWoff from '../assets/fonts/Roboto/Roboto-Medium.woff';
import RobotoMediumWoff2 from '../assets/fonts/Roboto/Roboto-Medium.woff2';
import RobotoRegularWoff from '../assets/fonts/Roboto/Roboto-Regular.woff';
import RobotoRegularWoff2 from '../assets/fonts/Roboto/Roboto-Regular.woff2';

const CommonStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${RobotoRegularWoff2}) format('woff2'),
         url(${RobotoRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${RobotoMediumWoff2}) format('woff2'),
         url(${RobotoMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${RobotoBoldWoff2}) format('woff2'),
         url(${RobotoBoldWoff}) format('woff');
  }
`;

export default CommonStyles;
