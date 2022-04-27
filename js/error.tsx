import styled from '@emotion/styled';
import React from 'react';

import { CircleSvg, ErrorSvg, PlayCircleSvg, PlusSvg } from './svg';

const accentColor = '#27AE60';
const textColor = '#26233F';
const errorColor = '#eb5757';

const ErrorIconDiv = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid ${errorColor};
  border-radius: 14px 0 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(1px, 1px);
  margin-right: 6px;
  svg {
    * {
      fill: #fff;
    }
  }
`;

export function ErrorIcon() {
  return (
    <ErrorIconDiv>
      <ErrorSvg />
    </ErrorIconDiv>
  );
}

const ErrorTextPar = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
`;

const ErrorMessageDiv = styled.div`
  background-color: ${errorColor};
  max-width: 250px;
  display: flex;
  flex-direction: row;
  padding: 6px;
  border-radius: 6px;
  align-items: flex-start;
`;

export function ErrorText({ children }) {
  return <ErrorTextPar> {children} </ErrorTextPar>;
}

export default function ErrorMessage() {
  return (
    <ErrorMessageDiv>
      <ErrorIcon />
      <ErrorText>
        DevTools failed to load source map: Could not parse content for
      </ErrorText>
    </ErrorMessageDiv>
  );
}
