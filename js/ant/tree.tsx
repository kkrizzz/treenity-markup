import React, { useState } from 'react';
import styled from '@emotion/styled';
import { DownOutlined } from '@ant-design/icons';
import { MainFolderCloseSvg, FileCloseSvg } from '../svg';
import { Tree, Icon, Button, Popover } from 'antd';

import {
    DeleteOutlined,
    EditOutlined,
    PlusOutlined,
    ToolOutlined,
    AuditOutlined,
    CopyOutlined,
    TagsOutlined,
  } from '@ant-design/icons';

import "../../less/tree.less";

const { TreeNode } = Tree;

const treeData = [
    {
        title: <> 
                Docs 
                <Button>Button</Button> 
               </>,
        key: '0-0',
        children: [
            {
                title: 'market budget',
                key: '0-0-0',
                children: [
                    {
                        title: 'income',
                        key: '0-0-0-0',
                        icon: <FileCloseSvg />,
                    },
                    {
                        title: 'expenses',
                        key: '0-0-0-1',
                        icon: <FileCloseSvg />,
                    },
                    {
                        title: 'profit',
                        key: '0-0-0-2',
                        icon: <FileCloseSvg />,
                    },
                ],
            },
            {
                title: 'Tasks',
                key: '0-0-1',
                children: [
                    {
                        title: 'personal tasks',
                        key: '0-0-1-0',
                        icon: <FileCloseSvg />,
                    },
                ],
            },
            {
                title: 'Purchases',
                key: '0-0-2',
                children: [
                    {
                        title: 'technics',
                        key: '0-0-2-0',
                        icon: <FileCloseSvg />,
                    },
                    {
                        title: 'products',
                        key: '0-0-2-1',
                        icon: <FileCloseSvg />
                    },
                ],
            },
        ],
    },
    {
    title: 'Profiles',
    key: '0-1',
    children: [
        {
        title: 'personal',
        key: '0-1-0',
        children: [
            {
            title: 'Andrew',
            key: '0-1-0-0',
            icon: <FileCloseSvg />,
            },
            {
            title: 'Dean',
            key: '0-1-0-1',
            icon: <FileCloseSvg />,
            },
        ],
        },
    ],
    },
];

export default function TreeAnt () {
    const [showLine, setShowLine] = useState(true);
    const [showIcon, setShowIcon] = useState(false);
    const [showLeafIcon, setShowLeafIcon] = useState(true);
    
    return (
        <Tree
            showLine={true}
            showIcon={true}
            defaultExpandedKeys={['0-0-0']}
            treeData={treeData}
            switcherIcon={ <MainFolderCloseSvg /> }
            // onSelect={onSelect}
        />
    );
}