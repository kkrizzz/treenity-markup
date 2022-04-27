import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

import { LockedSvg } from './svg';

import {MenuOpenClose, accentColor, accentClick, textColor, light, gray, white, errorColor, warningColor, NodeHeaderBG} from './progers-menu';

const ProgersMenuDiv = styled.div`
    width: 60px;
    font-family: "Inter", sans-serif;
    /* margin: 100px auto; */
`;

const ProgersMenuHeaderDivCLOSED = styled.div`
    width: 100%;
    height: 56px;
    background-color: ${light};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #DDE0E2;
`;

const ProgersMenuBlockedDiv = styled.div`
    width: 100%;
    background-color: ${light};
    height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    padding-top: 14px;
    svg{
        width: 24px;
        height: 24px;
        opacity: 0.2;
    }
`;

export function ProgersMenuHeaderCLOSED () {
    return (
        <ProgersMenuHeaderDivCLOSED> 
            <MenuOpenClose/> 
        </ProgersMenuHeaderDivCLOSED>
    );
}

function ProgersMenuBlockedCLOSED () {
    return(
        <ProgersMenuBlockedDiv>
            <LockedSvg/>
        </ProgersMenuBlockedDiv>
    );
}


// Сборка прогерского меню

export default function ProgersMenu () {
    return(
        <ProgersMenuDiv>
            <ProgersMenuHeaderCLOSED/>
            <ProgersMenuBlockedCLOSED/>
        </ProgersMenuDiv>
    );
}