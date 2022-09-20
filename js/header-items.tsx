import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';

import {addOpacity, accentColor, accentClick, textColor, light, gray, white, errorColor, warningColor, NodeHeaderBG} from './progers-menu';
import { NotifySvg } from './svg';

import { Switch } from 'antd';

const HeaderItemsContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`;

const SwitchHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SwitchHeaderTextStyled = styled.p`
    font-size: 12px;
    line-height: 12px;
    color: ${textColor};
    margin: 0 0 0 12px;
`;

const NotificationsHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
`;

const NotificationsHeaderTextStyled = styled.p`
    font-size: 8px;
    line-height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${errorColor};
    font-weight: 600;
    color: ${light};
    margin: 0 4px 0 0;
`;

const UserHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const UserHeaderTextStyled = styled.p`
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    color: ${textColor};
    margin: 0 0 0 12px;
`;

function UserHeaderImage ( {src} ) {
    return(
        <img src={src} alt="" />
    );
}

function UserHeader ( { children } ) {
    return(
        <UserHeaderStyled>
            {/* <UserHeaderImage src="../img/avatar.png"/> */}
            <img src="../img/avatar.png" alt="" />
            <UserHeaderTextStyled>
                {children}
            </UserHeaderTextStyled>
        </UserHeaderStyled>
    );
}

function SwitchHeader ({ children }) {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return(
        <SwitchHeaderStyled>
            <Switch defaultChecked onChange={onChange} />
            <SwitchHeaderTextStyled>
                {children}
            </SwitchHeaderTextStyled>
        </SwitchHeaderStyled>
    );
}

function NotificationsHeader ( {children} ) {
    return(
        <NotificationsHeaderStyled>
            <NotificationsHeaderTextStyled>
                {children}
            </NotificationsHeaderTextStyled>
            <NotifySvg />
        </NotificationsHeaderStyled>
    );
}

export default function HeaderItemsContainer () {

    return(
        <HeaderItemsContainerStyled>
            <SwitchHeader children="NightMode"/>
            <NotificationsHeader children="2" />
            <UserHeader children="djasfun@gmail.com" />
        </HeaderItemsContainerStyled>
    );
}