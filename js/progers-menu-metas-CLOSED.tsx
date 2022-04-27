import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

import { PlayCircleSvg } from './svg';

import {MenuOpenClose, addOpacity, accentColor, accentClick, textColor, light, gray, white, errorColor, warningColor, NodeHeaderBG} from './progers-menu';
import {ProgersMenuHeaderCLOSED} from './progers-menu-blocked-CLOSED';

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

const ProgersMetasListCLOSEDdiv = styled.div`
    width: 100%;
    padding: 14px 10px;
    background-color: ${light};
    height: calc(100vh - 28px - 56px);
`;

const ProgersMetaCLOSEDdiv = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${addOpacity(gray, 0.1)};
    &:last-of-type{
        margin-bottom: 0;
    }
    svg{
        width: 20px;
        height: 20px;
        * {
            fill: ${textColor};
        }
    }
`;

export function ProgersMenuHeaderCLOSED () {
    return (
        <ProgersMenuHeaderDivCLOSED> 
            <MenuOpenClose/> 
        </ProgersMenuHeaderDivCLOSED>
    );
}

function MetaItemCLOSED () {
    return(
        <ProgersMetaCLOSEDdiv>
            <PlayCircleSvg/>
        </ProgersMetaCLOSEDdiv>
    );
}

function MetasListCLOSED () {
    return(
        <ProgersMetasListCLOSEDdiv>
            <MetaItemCLOSED/>
            <MetaItemCLOSED/>
            <MetaItemCLOSED/>
            <MetaItemCLOSED/>
        </ProgersMetasListCLOSEDdiv>
    );
}

// Сборка прогерского меню

export default function ProgersMenu () {
    return(
        <ProgersMenuDiv>
            <ProgersMenuHeaderCLOSED/>
            <MetasListCLOSED/>
        </ProgersMenuDiv>
    );
}