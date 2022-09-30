import React from 'react';
import styled from '@emotion/styled';

import { Select } from 'antd';
import '../../less/select.less';

const { Option } = Select;

export default function SelectInput() {
  return (
    // <SelectContainerStyled>
    <Select
      defaultValue="jack"
      size="small"
      style={{
        width: '100%',
      }}
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
