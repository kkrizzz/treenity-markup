import styled from '@emotion/styled';
import React from 'react';

import { CircleSvg, ErrorSvg, PlayCircleSvg, PlusSvg } from './svg';
import {addOpacity, accentColor, accentClick, textColor, light, gray, white, errorColor, warningColor, NodeHeaderBG} from './progers-menu';

const TitleH4 = styled.h4`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  white-space: nowrap;
  color: ${textColor};
`;

export function Title({ children }) {
  return <TitleH4>{children}</TitleH4>;
}

/////////////////////////////////////////////////////////////////

const ToggleDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;

  input[type='checkbox'] {
    display: none;

    & + label {
      width: 20px;
      height: 12px;
      border-radius: 8px;
      border: 1px solid ${accentColor};
      position: relative;
      transition: 0.35s;
      background-color: ${white};
      &::before {
        position: absolute;
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: ${accentColor};
        top: 2px;
        left: 2px;
        transition: 0.35s;
      }
    }

    &:checked {
      & + label {
        background-color: ${accentColor};

        &::before {
          left: 10px;
          background-color: ${white};
        }
      }
    }
  }
`;

function Toggle() {
  return (
    <ToggleDiv>
      <input type="checkbox" id="show-info" name="show-info" />
      <label htmlFor="show-info" />
    </ToggleDiv>
  );
}

/////////////////////////////////////////////////////////////////

const SignalsDiv = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${accentColor};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
  }

  &.output {
    border-radius: 0 14px 14px 0;
  }
`;

export function RunOutputPort() {
  return (
    <SignalsDiv className="output">
      <CircleSvg />
    </SignalsDiv>
  );
}

/////////////////////////////////////////////////////////////////

const LayoutSimpleInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  font-family: 'Inter', sans-serif;
  background-color: ${light};
  border-radius: 14px;
  min-width: 200px;
  max-width: 300px;
`;

const SimpleInputDivLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function SimpleInput() {
  return (
    <LayoutSimpleInputDiv>
      <Title>Input (email)</Title>
      <SimpleInputDivLeft>
        <Toggle />
        <RunOutputPort />
      </SimpleInputDivLeft>
    </LayoutSimpleInputDiv>
  );
}
