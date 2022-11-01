import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  Row,
  Col,
  Menu,
  Layout,
  Button,
  Input,
  Space,
  Typography,
  Tabs,
  Form,
} from 'antd';
import Select from 'react-select';

import { DeleteSvg } from './svg';
import ComponentPage from './component-page';

import TagsButtons from './ant/tagsButtons';
import ProgsSelect from './ant/select';
import ProgersMetasItems from './ant/metasitems';

import { OpenCloseSvg, OpenCloseInnerSvg, SearchSvg } from './svg';

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

const { Text } = Typography;

const ProgersMenuDiv = styled.div`
  width: 340px;
  font-family: 'Inter', sans-serif;
  position: absolute;
  right: 340px;
  top: 64px;
  background-color: ${light};
  height: calc(100vh - 64px);
`;

// Сборка хэдэра

const CollapseMenuButton = styled(Button)`
  padding: 0;
  display: flex;
  align-items: center;
`;

export function ProgersMenuHeader() {
  return (
    <Row style={{ padding: '10px 20px' }}>
      <Col flex={1}>
        <CollapseMenuButton>
          <OpenCloseSvg />
        </CollapseMenuButton>
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

// Начало блока с пропсами для разрабов

const ProgersInputsBlockDiv = styled.div`
  width: 100%;
  padding: 12px 16px;
  background-color: ${light};
  border-bottom: 1px solid #dde0e2;
`;

const TagText = styled(Text)`
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

// Тэг

// Сборка ъэдэра пропсов

export function ProgersInputsBlockHeader({ onCollapse }) {
  return (
    <Row align="middle">
      <Col flex={2}>
        <Text strong>Message props</Text>
      </Col>
      <Col flex={3}>
        <Row align="middle" justify="end">
          <TagText>(8qNs56FxSFyH7mR9a)</TagText>
          <Button size="small" type="link">
            +Tag
          </Button>
          <CollapseButtonStyle onClick={onCollapse}>
            <OpenCloseInnerSvg />
          </CollapseButtonStyle>
        </Row>
      </Col>
    </Row>
  );
}

export function ProgersInput({ name, id, placeholder }) {
  return <input type="text" name={name} id={id} placeholder={placeholder} />;
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
    <Form.Item label="Text">
      <Row gutter={[8, 8]}>
        <Col flex="auto">
          <Input size="small" placeholder="Props" />
        </Col>
        <Col flex="32px">
          <PropsDeleteButton />
        </Col>
      </Row>
    </Form.Item>
  );
}

// Сборка блока с селектом

function ProgersPropsSelect() {
  return (
    <Form.Item label="Menu type">
      <Row gutter={[8, 8]}>
        <Col flex="auto">
          <ProgsSelect />
        </Col>
        <Col flex="32px">
          <PropsDeleteButton />
        </Col>
      </Row>
    </Form.Item>
  );
}

// Сборка блока с добавлением кнопок

function ProgersPropsAddButtons() {
  return (
    <Form.Item label="Add buttons">
      <Row gutter={[8, 8]}>
        <Col flex="auto">
          <TagsButtons />
        </Col>
        <Col flex="32px">
          <PropsDeleteButton />
        </Col>
      </Row>
    </Form.Item>
  );
}

// Сборка полного блока пропсов

export function ProgersInputsItem() {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <ProgersInputsBlockDiv>
      <ProgersInputsBlockHeader onCollapse={() => setCollapse((c) => !c)} />

      {!collapse && (
        <Form layout="vertical">
          <ProgersPropsInput />
          <ProgersPropsSelect />
          <ProgersPropsAddButtons />
        </Form>
      )}
    </ProgersInputsBlockDiv>
  );
}

// Сборка прогерского меню

const TabsProgersMenu = styled(Tabs)`
  overflow-y: auto;
  height: calc(100vh - 64px - 56px);
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #efefef;
    border-left: 1px solid #dde0e2;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--ant-primary-color);
    border-radius: 3px;
  }
  .ant-tabs-nav {
    background-color: #efefef;
    border-top: 1px solid #dde0e2;
    margin-bottom: 0px;
  }
`;

export default function ProgersMenu() {
  const [tab, setTab] = useState('metas');

  const tabItemss = [
    {
      label: 'Metas',
      key: 'metas',
      children: (
        <>
          <ProgersInputsItem />
          <ProgersInputsItem />
          <ProgersInputsItem />
        </>
      ),
    }, // remember to pass the key prop
    {
      label: 'Properties',
      key: 'props',
      children: <ProgersMetas />,
    },
  ];

  return (
    <ProgersMenuDiv>
      <ProgersMenuHeader />
      <TabsProgersMenu items={tabItemss} size="small" />
    </ProgersMenuDiv>
  );
}

// Metas menu

// Лэйблы инпутов

const ProgersMetasStyled = styled.div`
  padding: 16px;
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
    <Form layout="vertical">
      <Form.Item label="Search">
        <Input placeholder="Telegram bot" size="small" suffix={<SearchSvg />} />
      </Form.Item>
    </Form>
  );
}
