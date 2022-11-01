import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const MenuContainerStyled = styled.div`
  width: 100%;
  padding: 0 24px;
  b {
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #a7a2bd;
    display: block;
    margin-bottom: 14px;
  }
`;

interface IMenuComponent {
  menuItems: ItemType[];
}

const MenuComponent: FunctionComponent<IMenuComponent> = (props) => {
  const { menuItems } = props;
  return (
    <MenuContainerStyled>
      <b>Menu</b>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        inlineIndent={0}
        items={menuItems}
      />
    </MenuContainerStyled>
  );
};

export default MenuComponent;