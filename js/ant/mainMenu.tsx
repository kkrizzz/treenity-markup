import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Menu } from "antd";
import { HomeSvg, TemplateSvg, UploadSvg, TrashSvg } from '../svg';

import "../../less/mainmenu.less";

export default function MainMenu () {
    return(
        <Menu
            // theme="default"
            mode="inline"
            defaultSelectedKeys={['1']}
            inlineIndent={0}
            items={[
                {
                    key: '1',
                    icon: <HomeSvg />,
                    label: 'Home',
                },
                {
                    key: '2',
                    icon: <TemplateSvg />,
                    label: 'Template',
                },
                {
                    key: '3',
                    icon: <UploadSvg />,
                    label: 'Upload',
                },
                {
                    key: '4',
                    icon: <TrashSvg />,
                    label: 'Trash',
                }
            ]}
        />
    );
}