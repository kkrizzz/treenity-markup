import React from 'react';
import styled from '@emotion/styled';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

import {addOpacity, accentColor, accentClick, textColor, light, gray, white, errorColor, warningColor, NodeHeaderBG} from './progers-menu';

const VarPropsDiv = styled.div`
  width: 320px;
  background-color: #e4e3e7;
  border-radius: 12px;
  padding: 26px 6px 6px 6px;
`;

const VarPropsDivInner = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 8px;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  grid-template-columns: calc(100% - 34px) 28px;
  grid-template-rows: 12px 28px;
  grid-template-areas:
    "label label"
    "input delete";
  label {
    display: block;
    width: 100%;
    margin: 0 0 0 6px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    color: ${gray};
    order: -3;
    transition: 0.15s;
    grid-area: label;
  }

  input {
    height: 28px;
    border: none;
    background-color: ${white};
    border-radius: 10px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    color: #26233f;
    outline: none;
    border: 1px solid ${white};
    transition: 0.15s;
    order: -2;
    grid-area: input;
    &::placeholder {
      color: ${addOpacity(textColor, 0.4)};
    }

    &:hover {
      border-color: ${addOpacity(accentColor, 0.5)};

      & + label {
        color: ${accentColor};
      }
    }

    &:focus {
      border-color: ${accentColor};

      & + label {
        color: ${accentColor};
      }
    }
  }
`;

const VarPropsDeleteStyle = styled.a`
  display: block;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${addOpacity(errorColor, 0.2)};
  border-radius: 6px;
  order: -1;
  grid-area: delete;
  transform: translateY(1px);
`;

export function VarPropsInput({ name, id, placeholder }) {
  return <input type="text" name={name} id={id} placeholder={placeholder} />;
}

export function InputLabel({ children }) {
  return <label htmlFor="">{children}</label>;
}

export function PropsDelete() {
  return (
    <VarPropsDeleteStyle>
      <DeleteSvg />
    </VarPropsDeleteStyle>
  );
}

export const ButtonSave = ({ children }) => <button>{children}</button>;

const ButtonSaveDivStyle = styled.div`
  width: 100%;

  button {
    outline: none;
    border: none;
    width: 52px;
    height: 28px;
    border-radius: 8px;
    background-color: ${accentColor};
    font-weight: 500;
    color: ${white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.15s;

    &:hover {
      background-color: ${addOpacity(accentColor, 0.5)};
    }

    &:active {
      background-color: ${accentClick};
    }
  }
`;

function VarProps() {
  return (
    <VarPropsDiv>
      <VarPropsDivInner>
        <VarPropsInput></VarPropsInput>
        <InputLabel>Status</InputLabel>
        <PropsDelete />
      </VarPropsDivInner>

      <VarPropsDivInner>
        <VarPropsInput></VarPropsInput>
        <InputLabel>Id</InputLabel>
        <PropsDelete />
      </VarPropsDivInner>

      <VarPropsDivInner>
        <VarPropsInput></VarPropsInput>
        <InputLabel>User</InputLabel>
        <PropsDelete />
      </VarPropsDivInner>

      <ButtonSaveDivStyle>
        <ButtonSave>Save</ButtonSave>
      </ButtonSaveDivStyle>
    </VarPropsDiv>
  );
}

export default function () {
  return (
    <ComponentPage>
      <VarProps />
    </ComponentPage>
  );
}
