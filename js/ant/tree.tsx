import React, { useState } from 'react';
import styled from '@emotion/styled';
import { DownOutlined } from '@ant-design/icons';
import {
  MainFolderCloseSvg,
  FileCloseSvg,
  NewFileSvg,
  SettingsFileSvg,
  TagSettingsSvg,
  RenameSettingsSvg,
  DeleteSettingsSvg,
  CopySettingsSvg,
} from '../svg';
import { Tree, Icon, Button, Popover } from 'antd';

import '../../less/tree.less';

const { TreeNode } = Tree;

const FilesSettingsStyled = styled.div`
  width: 120px;
  padding: 4px;
  background-color: #e9e8ed;
  border-radius: 6px;
  position: absolute;
  z-index: 10;
  top: -103px;
  left: 97px;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    width: 100%;
    border: none;
    background-color: #e9e8ed;
    padding: 0 3px;
    &:hover {
      * {
        color: #17b158;
      }
      svg {
        path {
          fill: #17b158;
        }
      }
    }
    &:active {
      background-color: #178749;
      p,
      span {
        color: #fff;
      }
      svg {
        path {
          fill: #fff;
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    &.Delete {
      svg {
        path {
          fill: #eb5757;
        }
      }
      p {
        color: #eb5757;
      }
    }
    svg {
      width: 16px;
      height: 16px;
      margin-right: 3px;
      path {
        transition: 0.35s;
      }
    }
    p {
      margin-bottom: 0;
      font-size: 12px;
      line-height: 12px;
      display: flex;
      align-items: center;
      transition: 0.35s;
    }
    span {
      font-size: 10px;
      line-height: 10px;
      font-weight: bold;
      color: #a7a2bd;
      transition: 0.35s;
    }
  }
`;

function FilesSettings() {
  return (
    <FilesSettingsStyled>
      <Button size="small">
        <p>
          <TagSettingsSvg />
          Add tag
        </p>
        <span>Ctrl+T</span>
      </Button>

      <Button size="small">
        <p>
          <CopySettingsSvg />
          Copy
        </p>
        <span>Ctrl+C</span>
      </Button>

      <Button size="small">
        <p>
          <RenameSettingsSvg />
          Rename
        </p>
        <span>Ctrl+R</span>
      </Button>

      <Button size="small" className="Delete">
        <p>
          <DeleteSettingsSvg />
          Delete
        </p>
        <span>Del</span>
      </Button>
    </FilesSettingsStyled>
  );
}

const treeData = [
  {
    title: (
      <>
        Docs
        <Button size="small" className="control-icon control-newfile">
          <NewFileSvg />
        </Button>
        <Button size="small" className="control-icon control-settings">
          <SettingsFileSvg />
        </Button>
        {/* <FilesSettings /> */}
      </>
    ),
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
            icon: <FileCloseSvg />,
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

const SecondaryButtonPrimary = styled(Button)`
  background-color: #e0ede8;
  color: var(--ant-primary-color);
`;

export default function TreeAnt() {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);

  return (
    <>
      <Tree
        showLine={true}
        showIcon={true}
        defaultExpandedKeys={['0-0-0']}
        treeData={treeData}
        switcherIcon={<MainFolderCloseSvg />}
      />
      <SecondaryButtonPrimary
        type="primary"
        size="small"
        style={{ marginTop: '6px' }}
      >
        Add folder
      </SecondaryButtonPrimary>
    </>
  );
}
