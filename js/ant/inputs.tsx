import React, { useState } from 'react';
import styled from '@emotion/styled';

import { AutoComplete } from "antd";

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

export function AutoCompleteInput () {

    const [value, setValue] = useState('');

    const [options, setOptions] = useState([]);

    const onSearch = (searchText) => {
        setOptions(
            !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
    };

    const onSelect = (data) => {
        console.log('onSelect', data);
    };

    const onChange = (data) => {
        setValue(data);
    };

    return(
        <AutoComplete
            options={options}
            style={{
            width: 200,
            }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="input here"
        />
    );
}