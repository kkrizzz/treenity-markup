import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Switch, Tree } from 'antd';

const treeData = [
    {
        title: 'Docs',
        key: '0-0',
        icon: <CarryOutOutlined />,
        children: [
            {
                title: 'market budget',
                key: '0-0-0',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'income',
                        key: '0-0-0-0',
                        icon: <CarryOutOutlined />,
                    },
                    {
                        title: 'expenses',
                        key: '0-0-0-1',
                        icon: <CarryOutOutlined />,
                    },
                    {
                        title: 'profit',
                        key: '0-0-0-2',
                        icon: <CarryOutOutlined />,
                    },
                ],
            },
            {
                title: 'Tasks',
                key: '0-0-1',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'personal tasks',
                        key: '0-0-1-0',
                        icon: <CarryOutOutlined />,
                    },
                ],
            },
            {
                title: 'Purchases',
                key: '0-0-2',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'technics',
                        key: '0-0-2-0',
                        icon: <CarryOutOutlined />,
                    },
                    {
                        title: 'products',
                        key: '0-0-2-1',
                        icon: <CarryOutOutlined />
                    },
                ],
            },
        ],
    },
    {
    title: 'Profiles',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
        {
        title: 'personal',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
        children: [
            {
            title: 'Andrew',
            key: '0-1-0-0',
            icon: <CarryOutOutlined />,
            },
            {
            title: 'Dean',
            key: '0-1-0-1',
            icon: <CarryOutOutlined />,
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

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    
    return (
        <Tree
            showLine={showLine}
            showIcon={showIcon}
            defaultExpandedKeys={['0-0-0']}
            onSelect={onSelect}
            treeData={treeData}
        />
    );
}