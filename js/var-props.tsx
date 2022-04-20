import React from 'react';
import styled from '@emotion/styled';

import { DeleteSvg } from './svg';

const accentColor = '#27AE60';
const textColor = '#26233F';

const VarPropsDiv = styled.div`
  width: 320px;
  background-color: #E4E3E7;
  border-radius: 12px;
  padding: 26px 6px 6px 6px;
`;

const VarPropsDivInner = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 8px;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  grid-template-columns: calc(100% - 34px);
  grid-template-rows: 12px 28px;
  grid-template-areas: 
    "label label"
    "input delete";
  label{
    display: block;
    width: 100%;
    margin: 0 0 0 6px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    color: #A7A2BD;
    order: -3;
    transition: 0.15s;
    grid-area: label;
  }
  input{
    width: 100%;
    height: 28px;
    border: none;
    background-color: #fff;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    color: #26233F;
    outline: none;
    border: 1px solid #fff;
    transition: 0.15s;
    order: -2;
    grid-area: input;
    &::placeholder{
      color: rgba(#26233F, .4);
    }
    &:hover{
      border-color: rgba(#27AE60, .5);
      & + label{
        color: #27AE60;
      }
    }
    &:focus{
      border-color: #27AE60;
      & + label{
        color: #27AE60;
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
    grid-area: delete;
`;

export function VarPropsInput ({ name, id, placeholder }) {
    return <input type="text" name={name} id={id} placeholder={placeholder}/>;
} 

export function InputLabel({ children }) {
    return <label htmlFor=''>{children}</label>;
}

export function PropsDelete() {
    return (
        <VarPropsDeleteStyle>
            <DeleteSvg/>
        </VarPropsDeleteStyle>
    );   
}

export function ButtonSave ({ children }) {
    return <button>{children}</button>;
};
const ButtonSaveDivStyle = styled.div`
    width: 100%;
    button{
        outline: none;
        border: none;
        width: 52px;
        height: 28px;
        border-radius: 8px;
        background-color: #27AE60;
        font-weight: 500;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.15s;
            &:hover{
                background-color: rgba(#27AE60, .8);
            }
            &:active{
                background-color: #208B4D;
            }
        }
`;

export default function VarProps () {
    return(
        <VarPropsDiv>
            <VarPropsDivInner>
                <VarPropsInput></VarPropsInput>
                <InputLabel>Status</InputLabel>
                <PropsDelete/>
            </VarPropsDivInner>

            <VarPropsDivInner>
                <VarPropsInput></VarPropsInput>
                <InputLabel>Id</InputLabel>
                <PropsDelete/>
            </VarPropsDivInner>

            <VarPropsDivInner>
                <VarPropsInput></VarPropsInput>
                <InputLabel>User</InputLabel>
                <PropsDelete/>
            </VarPropsDivInner>

            <ButtonSaveDivStyle>
                <ButtonSave>Save</ButtonSave>
            </ButtonSaveDivStyle>
        </VarPropsDiv>
    );
}