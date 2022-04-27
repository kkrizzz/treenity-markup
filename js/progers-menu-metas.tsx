import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

import { PlayCircleSvg, SearchSvg, ArrowRightSvg } from './svg';

import {ProgersMenuHeader, ProgersMenuSwitch, addOpacity, accentColor, accentClick, textColor, light, gray, white, errorColor, warningColor, NodeHeaderBG} from './progers-menu';

const ProgersMenuDiv = styled.div`
    width: 340px;
    font-family: "Inter", sans-serif;
    /* margin: 100px auto; */
`;

const ProgersMetasDiv = styled.div`
    width: 100%;
    padding: 12px 16px;
    background-color: ${light};
    height: calc(100vh - 28px - 56px);
`;

function SearchInput({ name, id, placeholder }) {
    return <input type="text" name={name} id={id} placeholder={placeholder} />;
}

function SearchLabel () {
    return <label htmlFor="">Search</label>;
}

function ButtonSearch () {
    return <button type=''><SearchSvg/></button>
}

const ProgersMetasSearchDiv = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 6px;
    label{
        font-size: 12px;
        line-height: 12px;
        font-weight: 600;
        padding-left: 8px;
        margin-bottom: 6px;
        color: ${gray};
        display: block;
    }
    input{
        width: 100%;
        height: 32px;
        border-radius: 10px;
        border: 1px solid ${addOpacity(gray, 0.25)};
        font-size: 12px;
        color: ${textColor};
        padding: 0 10px;
        outline: none;
        &::placeholder{
            color: ${addOpacity(textColor, 0.75)};
        }
    }
    button{
        position: absolute;
        background: none;
        border: none;
        width: 32px;
        height: 32px;
        bottom: 0;
        right: 0;
    }
`;

function ProgersMetasSearch () {
    return(
        <ProgersMetasSearchDiv>
            <SearchLabel/>
            <SearchInput placeholder='...'/>
            <ButtonSearch/>
        </ProgersMetasSearchDiv>
    );
}

const ProgersMetasListDiv = styled.div`
    width: 100%;
`;

const ProgersMetaDiv = styled.div`
    width: 100%;
    margin-bottom: 6px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    background-color: ${addOpacity(gray, 0.1)};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProgersMetaTitle = styled.div`
    display: flex;
    align-items: center;
    svg{
      width: 18px;
      height: 18px;
      * {
        fill: ${textColor};
      }
    }
`;

const MetaTitleH5 = styled.h5`
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    color: ${textColor};
    margin-left: 12px;
`;

function MetaTitle ({children}) {
    return(
        <MetaTitleH5>{children}</MetaTitleH5>
    );
}

const OpenSubMetasA = styled.a`
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function OpenSubMetas () {
    return(
        <OpenSubMetasA>
            <ArrowRightSvg/>
        </OpenSubMetasA>
    );
}

function MetaItem () {
    return(
        <ProgersMetaDiv>
            <ProgersMetaTitle>
                <PlayCircleSvg/>
                <MetaTitle children="UI/UX design"/>
            </ProgersMetaTitle>
            <OpenSubMetas/>
        </ProgersMetaDiv>
    );
}

function MetasList () {
    return(
        <ProgersMetasListDiv>
            <MetaItem/>
            <MetaItem/>
            <MetaItem/>
            <MetaItem/>
        </ProgersMetasListDiv>
    );
}

function ProgersMetas () {
    return(
        <ProgersMetasDiv>
            <ProgersMetasSearch/>
            <MetasList/>
        </ProgersMetasDiv>
    );
}

// Сборка прогерского меню

export default function ProgersMenu () {
    return(
        <ProgersMenuDiv>
            <ProgersMenuHeader/>
            <ProgersMenuSwitch/>
            <ProgersMetas />
        </ProgersMenuDiv>
    );
}