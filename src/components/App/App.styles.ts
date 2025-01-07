import styled, { keyframes } from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`;

export const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
