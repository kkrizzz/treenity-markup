import React from 'react';
import styled from '@emotion/styled';

import { Button, DatePicker, Space } from "antd";

export function Buttons () {
    return(
        <Space>
            <DatePicker />
            <Button size="small" type="primary">Button Sample</Button>
            <Button size="default" danger>Danger Button</Button>
            <Button size="large" type="primary" danger>
                Create folder
            </Button>    
        </Space>
    );
}

