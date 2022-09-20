import React from 'react';
import styled from '@emotion/styled';

import { Pagination, Space } from "antd";



export function Pags () {
    return(
        <Space align="center">
            <Pagination defaultCurrent={1} total={50} />
        </Space>
    );
}