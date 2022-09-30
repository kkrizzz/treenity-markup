import React from 'react';
import styled from '@emotion/styled';
import { Menu } from 'antd';

import {
  MetasDesign,
  MetasTest,
  MetasDatabase,
  MetasTool,
  MetasLayout,
  MetasService,
  MetasWeb,
  MetasCrypto,
  MetasTasks,
  MetasChat,
  MetasBot,
} from '../svg';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('UX/UI design', 'design', <MetasDesign />, [
    getItem('UI props', '1'),
    getItem('UX props', '2'),
    getItem('Users conf', '3'),
  ]),
  getItem('Testing', 'testing', <MetasTest />, [
    getItem('Bruteforce', '4'),
    getItem('Program overload ', '5'),
  ]),
  getItem('Databases', 'data', <MetasDatabase />, [
    getItem('Users', '6'),
    getItem('Companies', '7'),
    getItem('VK users', '8'),
  ]),
  getItem('Tools', 'tools', <MetasTool />, [getItem('Something', '9')]),
  getItem('Layout', 'layout', <MetasLayout />),
  getItem('Services', 'services', <MetasService />),
  getItem('Web 3.0', 'web3', <MetasWeb />),
  getItem('Crypto', 'crypto', <MetasCrypto />),
  getItem('Tasks', 'tasks', <MetasTasks />),
  getItem('Chat', 'chat', <MetasChat />),
  getItem('Bots', 'bot', <MetasBot />),
];

const MetasItemsStyled = styled(Menu)`
  .ant-menu-submenu {
    & > div {
      padding-left: var(--ant-padding-xs) !important;
      border-radius: var(--ant-border-radius-base);
      span {
        color: var(--text-color);
      }
      i {
        color: var(--ant-gray-color) !important;
      }
    }
    &-active > div {
      background-color: #e8e7ed;
      i {
        color: var(--ant-gray-color) !important;
      }
    }

    &-open > div {
      background-color: #e8e7ed !important;
    }
    &-selected > div {
      background-color: #e8e7ed !important;
    }
  }

  .ant-menu {
    background-color: transparent;
    &-item {
      &-active {
        background-color: #e8e7ed;
        color: var(--text-color);
      }
      &-selected {
        background-color: var(--ant-primary-color);
      }
    }
  }

  .ant-menu-item {
    &:not(.ant-menu-item-selected):hover {
      background-color: #e8e7ed !important;
      svg * {
        fill: var(--ant-gray-color);
      }
      span {
        color: var(--text-color);
      }
    }
    &-selected {
      background-color: #e8e7ed !important;
      svg * {
        fill: var(--ant-gray-color);
      }
      span {
        color: var(--text-color);
      }
    }
  }

  .ant-menu-sub {
    padding-left: 20px;
  }
`;

export default function MetasItems() {
  return (
    <MetasItemsStyled
      mode="inline"
      style={{
        width: '100%',
      }}
      items={items}
    />
  );
}
