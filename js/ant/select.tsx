import React from 'react';
import styled from '@emotion/styled';

import { Select } from "antd";

// const SelectContainerStyled = styled.div`
//     .ant-select-selector{
//         border-radius: 4px !important;
//     }
// `;

export default function SelectInput () {

    const { Option } = Select;

    const handleChange_select = (value) => {
        console.log(`selected ${value}`);
    };

    return(
        // <SelectContainerStyled>
            <Select
                defaultValue="lucy"
                size="small"
                style={{
                    width: '100%'
                }}
                onChange={handleChange_select}
                >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        // </SelectContainerStyled>
    );
}