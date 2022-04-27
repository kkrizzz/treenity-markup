import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

import { LockedSvg } from './svg';

import {ProgersMenuHeader, addOpacity, accentColor, accentClick, textColor, light, gray, white, errorColor, warningColor, NodeHeaderBG} from './progers-menu';

const ProgersMenuDiv = styled.div`
    width: 340px;
    font-family: "Inter", sans-serif;
    /* margin: 100px auto; */
`;

const ProgersMenuBlockedDiv = styled.div`
    width: 100%;
    background-color: ${light};
    height: calc(100vh - 56px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    a{
        width: 70px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${white};
        background-color: ${accentColor};
        border-radius: 10px;
        font-size: 12px;
        line-height: 12px;
        font-weight: 500;
        text-decoration: none;
        &:hover {
            background-color: ${addOpacity(accentColor, 0.8)};
        }
    
        &:active {
            background-color: ${accentClick};
        }
    }
`;

const TitleH2Style = styled.h2`
    text-align: center;
    margin: 12px 0;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: ${gray};
`;

function TitleH2 ({children}) {
    return(
        <TitleH2Style>{children}</TitleH2Style>
    );
}

function CloseButton () {
    return <a href="#">Close</a>;
}

function ProgersMenuBlocked () {
    return(
        <ProgersMenuBlockedDiv>
            <LockedSvg/>
            <TitleH2 children="Available only for advanced users"/>
            <CloseButton/>
        </ProgersMenuBlockedDiv>
    );
}

// Сборка прогерского меню

export default function ProgersMenu () {
    return(
        <ProgersMenuDiv>
            <ProgersMenuHeader/>
            <ProgersMenuBlocked/>
        </ProgersMenuDiv>
    );
}