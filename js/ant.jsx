import React, { useState } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';



// import "../less/dark-treenity.less";
import "../less/variable-treenity.less";
import "../less/default-treenity.less";

import {version, Row, Col, Divider, Menu, Layout} from "antd";

import { Breadcrumbs } from './ant/breadcrumbs';
import { Buttons } from './ant/buttons';
import { Dropdowns } from './ant/dropdowns';
import { Pags } from './ant/paginations';
import { StepsDefault } from './ant/steps';
import { StepsFull } from './ant/stepsFull';
import { AutoCompleteInput } from './ant/inputs';
import { SelectInput } from './ant/select';
import { SelectTags } from './ant/tags';
import { CheckboxesInput } from './ant/checkbox';
import { NavMenu } from './ant/navs';

export default function UIsample () {
  
// Layout

const [collapsed, setCollapsed] = useState(false);
const { Header, Sider, Content } = Layout;

    return(
        <div className="App">
            <h1>antd version: {version}</h1>
            
            <Divider />

            <Row>
                <Col span={8} align="center">
                    <Breadcrumbs/>
                </Col>
                <Col span={8} align="center">
                    <Buttons/>
                </Col>
                <Col span={8} align="center">
                    <Dropdowns/>
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col span={6} align="center">
                    <Pags />
                </Col>
                <Col span={9} align="center">
                    <StepsDefault/>
                </Col>
                <Col span={9} align="center">
                    <StepsFull/>
                </Col> 
            </Row>

            <Divider />

            <Row>
                <Col span={4}>
                    <AutoCompleteInput/>
                </Col>
                <Col span={4}>
                    <SelectInput />
                </Col>
                <Col span={4}>
                    <SelectTags />
                </Col>
                <Col span={4}>

                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={4}>
                    <CheckboxesInput />
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col span={12}>
                    <NavMenu />
                </Col>
            </Row>

        </div>
    );
}