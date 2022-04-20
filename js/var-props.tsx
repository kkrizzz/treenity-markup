import React from 'react';
import styled from '@emotion/styled';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

const accentColor = '#27AE60';
const textColor = '#26233F';

const VarPropsDiv = styled.div`
  width: 320px;
  background-color: #e4e3e7;
  border-radius: 12px;
  padding: 26px 6px 6px 6px;
`;

const VarPropsDivInner = styled.div`
  display: grid;
  margin-bottom: 8px;
  grid-column-gap: 11px;

  label {
    display: block;
    width: 100%;
    margin: 0 0 4px 6px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    color: #a7a2bd;
    order: -3;
    transition: 0.15s;
  }

  input {
    width: 100%;
    height: 28px;
    border: none;
    background-color: #fff;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    color: #26233f;
    outline: none;
    border: 1px solid #fff;
    transition: 0.15s;
    order: -2;
    grid-column: 1 / 23;

    &::placeholder {
      color: rgba(#26233f, 0.4);
    }

    &:hover {
      border-color: rgba(#27ae60, 0.5);

      & + label {
        color: #27ae60;
      }
    }

    &:focus {
      border-color: #27ae60;

      & + label {
        color: #27ae60;
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
  background-color: #eb575733;
  border-radius: 6px;
  order: -1;
  grid-column: 23 / 24;
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
    background-color: #27ae60;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.15s;

    &:hover {
      background-color: rgba(#27ae60, 0.8);
    }

    &:active {
      background-color: #208b4d;
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
