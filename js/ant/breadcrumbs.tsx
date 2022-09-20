import React from 'react';
import styled from '@emotion/styled';

import { Breadcrumb } from "antd";

export function Breadcrumbs () {
    return(
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>

            <Breadcrumb.Item>
                <a href="">Application Center</a>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>

            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    );
}