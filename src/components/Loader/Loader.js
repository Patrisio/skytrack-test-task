import React from 'react';
import styled, { keyframes } from 'styled-components';

const movementsByLowerJaw = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(-45deg) }
  100% { transform: rotate(0deg) }
`;

const movementsByUpperJaw = keyframes`
  0% { transform: rotate(180deg) }
  50% { transform: rotate(225deg) }
  100% { transform: rotate(180deg) }
`;

const foodMovements = keyframes`
  0% { transform: translate(192.85px,0); opacity: 0 }
  20% { opacity: 1 }
  100% { transform: translate(71.05px,0); opacity: 1 }
`;

const Overlay = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 80.67px);
  background: #fff;
  z-index: -1;
`;

const Outer = styled.div`
  & {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 203px;
    height: 203px;
    display: inline-block;
    overflow: hidden;
    margin: 0 auto;
  }
`;

const Inner = styled.div`
  & > div:nth-child(2) {
    transform: translate(-15px,0);
  }
  & > div:nth-child(2) div {
    position: absolute;
    top: 40.599999999999994px;
    left: 40.599999999999994px;
    width: 121.79999999999998px;
    height: 60.89999999999999px;
    border-radius: 121.79999999999998px 121.79999999999998px 0 0;
    background: #fcd857;
    animation: ${movementsByLowerJaw} 0.6944444444444443s linear infinite;
    transform-origin: 60.89999999999999px 60.89999999999999px
  }
  & > div:nth-child(2) div:nth-child(2) {
    animation: ${movementsByUpperJaw} 0.6944444444444443s linear infinite
  }
  & > div:nth-child(2) div:nth-child(3) {
    transform: rotate(-90deg);
    animation: none;
  }
  & > div:nth-child(1) {
    display: block;
  }
  & > div:nth-child(1) div {
    position: absolute;
    top: 93.38px;
    left: -8.12px;
    width: 16.24px;
    height: 16.24px;
    border-radius: 50%;
    background: #e15b64;
    animation: ${foodMovements} 0.6944444444444443s linear infinite
  }
  & > div:nth-child(1) div:nth-child(1) { animation-delay: -0.9648000000000002s }
  & > div:nth-child(1) div:nth-child(2) { animation-delay: -0.47520000000000007s }
  & > div:nth-child(1) div:nth-child(3) { animation-delay: 0s }
  & {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
`;

export const Loader = () => {
  return (
    <Overlay>
      <Outer>
        <Inner>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Inner>
      </Outer>
    </Overlay>
  );
};