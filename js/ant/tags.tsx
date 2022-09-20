import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Select } from "antd";

export function SelectTags () {

    const { Option } = Select;
    const children = [];

    for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    
    const handleChange_selectTags = (value) => {
    console.log(`Selected: ${value}`);
    }; 

    const [size, setSize] = useState('middle');

    const handleSizeChange = (e) => {
    setSize(e.target.value);
    };

    return(
        <Select
            mode="tags"
            size="small"
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={handleChange_selectTags}
            style={{
                width: '100%'
            }}
        >
        {children}
        </Select>
    );
}