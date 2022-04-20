import React from 'react';
import styled from '@emotion/styled';

import { CircleSvg, ErrorSvg, PlayCircleSvg, PlusSvg } from './svg';

const accentColor = '#27AE60';
const textColor = '#26233F';

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

  &.input {
    border-radius: 14px 0 0 0;
  }

  &.output {
    border-radius: 0 14px 0 0;
  }
`;

export function RunInputPort() {
  return (
    <SignalsDiv className="input">
      <PlayCircleSvg />
    </SignalsDiv>
  );
}

export function RunOutputPort() {
  return (
    <SignalsDiv className="output">
      <CircleSvg />
    </SignalsDiv>
  );
}

const TitleH4 = styled.h4`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  white-space: nowrap;
`;

export function Title({ children }) {
  return <TitleH4>{children}</TitleH4>;
}

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
      background-color: #fff;
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
          background-color: #fff;
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

export const HeaderDiv = styled.div`
  height: 32px;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: row;
  border-radius: 14px 14px 0 0;
  justify-content: space-between;
`;

export const HeaderLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  transform: translate(-1px, -1px);
`;

export const HeaderRightDiv = styled(HeaderLeftDiv)`
  transform: translate(1px, -1px);
`;

export const CardHeader = () => (
  <HeaderDiv>
    <HeaderLeftDiv>
      <RunInputPort />
      <Title>Create user</Title>
    </HeaderLeftDiv>
    <HeaderRightDiv>
      <Toggle />
      <RunOutputPort />
    </HeaderRightDiv>
  </HeaderDiv>
);

const Checkbox = () => (
  <>
    <input
      type="checkbox"
      id="var-output-checkbox"
      name="var-output-checkbox"
    />
    <label htmlFor="var-output-checkbox" />
  </>
);

const InputPortDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;

  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    font-size: 12px;
    line-height: 12px;
    display: block;
    margin: 0 6px;
  }

  .bind {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 8px 8px 0;

    span {
      display: block;
      font-size: 10px;
      font-weight: bold;
      color: #fff;
      text-transform: capitalize;
    }
  }
  input[type=checkbox]{
    display: none;
    & + label{
        width: 12px;
        height: 12px;
        border-radius: 2px;
        border: 1px solid ${accentColor};
        position: relative;
        &::before{
            position: absolute;
            content: '';
            width: 6px;
            height: 4px;
            border-left: 2px solid #fff;
            border-bottom: 2px solid #fff;
            transform: rotate(-45deg);
            top: 1.5px;
            left: 2px;
            opacity: 0;
        }
    }
    &:checked{
        & + label{
            background-color: ${accentColor};
            &::before{
                opacity: 1;
            }
        }
    }
}
`;

export function InputPort({ symbol, name, widget }) {
  widget = React.cloneElement(widget, {
    children: (
      <div className="bind" style={{ backgroundColor: '#E2B93B' }}>
        <span>{symbol}</span>
      </div>
    ),
  });
  return (
    <InputPortDiv>
      {widget}
      <p>{name}</p>
      {<Checkbox />}
    </InputPortDiv>
  );
}

const InputAddDiv = styled(InputPortDiv)`
  text-decoration: none;
  margin-top: 6px;

  .bind {
    background-color: ${accentColor} !important;
  }

  p {
    color: ${textColor};
  }
`;

function InputVarAdd() {
  return (
    <InputAddDiv as="a" href="#">
      <div className="bind" style={{ backgroundColor: '#E2B93B' }}>
        <PlusSvg />
      </div>
      <p>add var</p>
    </InputAddDiv>
  );
}

const OutputPortDiv = styled(InputPortDiv)`
  .bind {
    border-radius: 8px 0 0 8px !important;
  }
`;

export function OutputPort({ symbol, name, widget }) {
  widget = React.cloneElement(widget, {
    children: (
      <div className="bind" style={{ backgroundColor: '#E2B93B' }}>
        <span>{symbol}</span>
      </div>
    ),
  });

  return (
    <OutputPortDiv>
      {<Checkbox />}
      <p>{name}</p>
      {widget}
    </OutputPortDiv>
  );
}

const VarsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VarsInputDiv = styled(VarsDiv)`
  transform: translateX(-1px);
`;
export const VarsOutputDiv = styled(VarsDiv)`
  transform: translateX(1px);
  align-items: flex-end;
`;

function InputVars() {
  return (
    <VarsInputDiv>
      <InputPort symbol="s" name="in-port" widget={<div></div>}/>
      <InputPort symbol="s" name="in-port" widget={<div></div>}/>
      <InputPort symbol="s" name="in-port" widget={<div></div>}/>
      <InputPort symbol="s" name="in-port" widget={<div></div>}/>
      <InputPort symbol="s" name="in-port" widget={<div></div>}/>
      <InputVarAdd />
    </VarsInputDiv>
  );
}

function OutputVars() {
  return (
    <VarsOutputDiv>
      <OutputPort symbol="s" name="out-port" widget={<div></div>} />
      <OutputPort symbol="s" name="out-port" widget={<div></div>} />
      <OutputPort symbol="s" name="out-port" widget={<div></div>} />
    </VarsOutputDiv>
  );
}

export const CardBodyDiv = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function CardBody() {
  return (
    <CardBodyDiv>
      <InputVars />
      <OutputVars />
    </CardBodyDiv>
  );
}

export const CardFooterDiv = styled.div`  
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export function CardFooter() {
  return (
    <CardFooterDiv>
      <ErrorPort />
    </CardFooterDiv>
  );
}

const ErrorOutputDiv = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #eb5757;
  border-radius: 14px 0 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(1px, 1px);

  &.detected {
    background-color: #eb5757;

    svg {
      * {
        fill: #fff;
      }
    }
  }
`;

export function ErrorPort() {
  return (
    <ErrorOutputDiv className="detected">
      <ErrorSvg />
    </ErrorOutputDiv>
  );
}

export const NodeDiv = styled.div`
  max-width: 500px;
  min-width: 300px;
  font-family: 'Inter', sans-serif;
  color: ${textColor};
  background-color: #efefef;
  border-radius: 14px;
  border: 1px solid #a7a2bd;
`;

export default function Node() {
  return (
    <NodeDiv>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </NodeDiv>
  );
}
