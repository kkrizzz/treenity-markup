import React from 'react';
import styled from '@emotion/styled';

import { Dropdown, Space, Button, Menu, message } from "antd";
import { UserOutlined, UserOutlined} from '@ant-design/icons';

const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
};
  
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menu = (
    <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const menu2 = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '1st menu item',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: '2nd menu item',
          key: '2',
          icon: <UserOutlined />,
        },
        {
          label: '3rd menu item',
          key: '3',
          icon: <UserOutlined />,
        },
      ]}
    />
);

export function Dropdowns () {
    return(
        <Space>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Button size="small">Dropdown Arrow</Button>
            </Dropdown>

            <Dropdown overlay={menu} placement="bottomLeft">
                <Button>Dropdown</Button>
            </Dropdown>

            <Dropdown overlay={menu} placement="bottomLeft">
                <Button size="large">Dropdown</Button>
            </Dropdown>

            <Dropdown.Button onClick={handleButtonClick} overlay={menu2}>
                Dropdown
            </Dropdown.Button>
        </Space>
    );
}

