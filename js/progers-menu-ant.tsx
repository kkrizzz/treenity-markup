import React, { useState } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

import TagsButtons from './ant/tagsButtons';
import ProgsSelect from './ant/select';

import { Row, Col, Menu, Layout, Button, Input, Space, Typography } from 'antd';

import {
  OpenCloseSvg,
  OpenCloseInnerSvg,
  SearchSvg,
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
} from './svg';

import '../less/ant.less';

export function addOpacity(hex, opacity) {
  return (
    hex +
    Math.round(opacity * 256)
      .toString(16)
      .padStart(2, '0')
  );
}

export const accentColor = 'var(--ant-primary-color)';
export const accentClick = 'var(--ant-primary-color-active)';
export const textColor = 'var(--text-color)';
export const light = 'var(--ant-light-color)';
export const gray = 'var(--ant-grey-color)';

export const white = 'var(--ant-white-color)';

export const errorColor = 'var(--ant-error-color)';
export const warningColor = 'var(--ant-warning-color)';

export const NodeHeaderBG = '#e2e2e2';

const ProgersMenuDiv = styled.div`
  width: 340px;
  font-family: 'Inter', sans-serif;
  position: absolute;
  right: 340px;
  top: 64px;
  background-color: ${light};
  height: calc(100vh - 64px);
`;

const MenuSwitchButton = styled.a`
  font-size: 10px;
  font-weight: 500;
  color: #26233f;
  text-decoration: none;
  position: relative;
  height: 100%;
  line-height: 26px;
  padding: 0 12px;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${accentColor};
    bottom: -1px;
    left: 0;
    right: 0;
    opacity: 0;
  }
  &.active {
    &::before {
      opacity: 1;
    }
  }
`;

// Кнопка открытия и закрытия меню

const MenuOpenClose = ({ onCollapse2 }) => (
  <a
    href="#"
    className="open-close"
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    onClick={onCollapse2}
  >
    <OpenCloseSvg />
  </a>
);

// Сборка хэдэра

export function ProgersMenuHeader() {
  return (
    <Row style={{ padding: '10px 20px' }}>
      <Col flex={1} justify="center" style={{ padding: '4px 0' }}>
        <MenuOpenClose />
      </Col>
      <Col flex={4}>
        <Row justify="end" align="middle" gutter={[4, 4]}>
          <Col>
            <Button size="small" type="text">
              Preview
            </Button>
          </Col>
          <Col>
            <Button size="small" type="link">
              Save as draft
            </Button>
          </Col>
          <Col>
            <Button size="default" type="primary" style={{ padding: '0 16px' }}>
              Publish
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

// Кнопки переключения между МЕТА и ПРОПС

function ProgersMenuSwitchButton({ link, id, className, children, onClick }) {
  return (
    <MenuSwitchButton href={link} className={className} onClick={onClick}>
      {children}
    </MenuSwitchButton>
  );
}

// Сборка блока переключения между МЕТА и ПРОПС

export function MenuTabs({ tabs, value, onChange }) {
  return (
    <Row
      style={{
        borderTop: '1px solid #DDE0E2',
        borderBottom: '1px solid #DDE0E2',
        backgroundColor: '#EFEFEF',
      }}
    >
      {tabs.map(([id, label]) => (
        <ProgersMenuSwitchButton
          className={id === value ? 'active' : ''}
          onClick={() => onChange(id)}
        >
          {label}
        </ProgersMenuSwitchButton>
      ))}
    </Row>
  );
}

// Начало блока с пропсами для разрабов

const ProgersInputsBlockDiv = styled.div`
  width: 100%;
  padding: 12px 16px;
  background-color: ${light};
  border-bottom: 1px solid #dde0e2;
`;

const TagSpan = styled.span`
  font-size: 8px;
  line-height: 8px;
  color: #a7a2bd;
`;

const CollapseButtonStyle = styled.button`
  width: 18px;
  height: 18px;
  outline: none;
  background-color: none;
  border: none;
`;

const PropsContainer = styled.div`
  margin-bottom: 4px;
`;

// Тэг

function Tag({ children }) {
  return <TagSpan>{children}</TagSpan>;
}

// Сборка ъэдэра пропсов

const { Text } = Typography;

export function ProgersInputsBlockHeader({ onCollapse }) {
  return (
    <Row align="middle">
      <Col flex={2}>
        <Text strong>Message props</Text>
      </Col>
      <Col flex={3}>
        <Row align="middle" justify="end">
          <Tag children="(8qNs56FxSFyH7mR9a)" />
          <Button size="small" type="link">
            +Tag
          </Button>
          <CollapseButtonStyle onClick={onCollapse}>
            {' '}
            <OpenCloseInnerSvg />{' '}
          </CollapseButtonStyle>
        </Row>
      </Col>
    </Row>
  );
}

const ProgersInputsBlockBody = styled.div`
  display: block;
  margin-top: 8px;
`;

export function ProgersInput({ name, id, placeholder }) {
  return <input type="text" name={name} id={id} placeholder={placeholder} />;
}

// Лэйблы инпутов

function InputLabel({ children }) {
  return (
    <label
      htmlFor=""
      style={{
        fontSize: '12px',
        lineHeight: '12px',
        fontWeight: '600',
        color: '#A7A2BD',
        margin: '0px 0px 0px 4px',
        display: 'block',
      }}
    >
      {' '}
      <span> {children} </span>{' '}
    </label>
  );
}

function PropsDeleteButton() {
  return (
    <Button type="primary" danger size="small" style={{ padding: '4px' }}>
      <DeleteSvg />
    </Button>
  );
}

// Параметры селекта

// Сборка блока с инпут полем

function ProgersPropsInput() {
  return (
    <PropsContainer>
      <Row>
        <Col flex={24}>
          <InputLabel children="Text" />
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col flex="auto">
          <Input size="small" placeholder="Props" />
        </Col>
        <Col flex="32px">
          <PropsDeleteButton />
        </Col>
      </Row>
    </PropsContainer>
  );
}

// Сборка блока с селектом

function ProgersPropsSelect() {
  return (
    <PropsContainer>
      <Row>
        <Col flex={24}>
          <InputLabel children="menu Type" />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col flex="auto">
          <ProgsSelect />
        </Col>
        <Col flex="32px">
          <PropsDeleteButton />
        </Col>
      </Row>
    </PropsContainer>
  );
}

function ProgersPropsAddButtons() {
  return (
    <PropsContainer>
      <Row>
        <Col flex={24}>
          <InputLabel children="Rows" />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col flex="auto">
          <TagsButtons />
        </Col>
        <Col flex="32px">
          <PropsDeleteButton />
        </Col>
      </Row>
    </PropsContainer>
  );
}

// Сборка полного блока пропсов

export function ProgersInputsItem() {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <ProgersInputsBlockDiv>
      <ProgersInputsBlockHeader onCollapse={() => setCollapse((c) => !c)} />

      {!collapse && (
        <ProgersInputsBlockBody>
          <ProgersPropsInput />
          <ProgersPropsSelect />
          <ProgersPropsAddButtons />
        </ProgersInputsBlockBody>
      )}
    </ProgersInputsBlockDiv>
  );
}

// Сборка прогерского меню

export default function ProgersMenu() {
  const [tab, setTab] = useState('metas');

  return (
    <ProgersMenuDiv>
      <ProgersMenuHeader />

      <MenuTabs
        tabs={[
          ['metas', 'Metas'],
          ['props', 'Properties'],
        ]}
        value={tab}
        onChange={setTab}
      />

      {tab === 'metas' ? (
        <>
          <ProgersInputsItem />
          <ProgersInputsItem />
          <ProgersInputsItem />
        </>
      ) : tab === 'props' ? (
        <ProgersMetas />
      ) : null}
    </ProgersMenuDiv>
  );
}

// Metas menu

const ProgersMetasStyled = styled.div`
  padding: 16px;
`;

const ProgersMetasItemsStyled = styled.div`
  width: 100%;
  padding-top: 6px;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #edecf1;
    padding: 0 10px;
    transition: 0.35s;
    margin-bottom: 6px;
    &:hover {
      background-color: var(--ant-primary-color);
      color: var(--ant-light-color);
      svg {
        * {
          fill: var(--ant-light-color);
        }
      }
    }
    span {
      margin-left: 12px;
      font-size: 12px;
      font-weight: 500;
    }
    svg {
      &:last-child {
        width: 20px;
        height: 20px;
        transform: rotate(90deg);
        margin-left: auto;
      }
      path {
        transition: 0.35s;
      }
    }
  }
`;

function ProgersMetas() {
  return (
    <ProgersMetasStyled>
      <ProgersMetasSearch />
      <ProgersMetasItems />
    </ProgersMetasStyled>
  );
}

function ProgersMetasSearch() {
  return (
    <>
      <InputLabel children="Search" />
      <Input placeholder="Telegram bot" size="small" suffix={<SearchSvg />} />
    </>
  );
}

function ProgersMetasItem({ icon, txt }) {
  return (
    <Button type="default">
      {icon}
      {txt}
      <OpenCloseInnerSvg />
    </Button>
  );
}

function ProgersMetasItems() {
  return (
    <ProgersMetasItemsStyled>
      <ProgersMetasItem icon={<MetasDesign />} txt={'UX/UI design'} />
      <ProgersMetasItem icon={<MetasTest />} txt={'Test'} />
      <ProgersMetasItem icon={<MetasDatabase />} txt={'Data'} />
      <ProgersMetasItem icon={<MetasTool />} txt={'Tools'} />
      <ProgersMetasItem icon={<MetasLayout />} txt={'Layout'} />
      <ProgersMetasItem icon={<MetasService />} txt={'Services'} />
      <ProgersMetasItem icon={<MetasWeb />} txt={'Web 3.0'} />
      <ProgersMetasItem icon={<MetasCrypto />} txt={'Crypto'} />
      <ProgersMetasItem icon={<MetasTasks />} txt={'Tasks'} />
      <ProgersMetasItem icon={<MetasChat />} txt={'Chat'} />
      <ProgersMetasItem icon={<MetasBot />} txt={'Bots'} />
    </ProgersMetasItemsStyled>
  );
}
