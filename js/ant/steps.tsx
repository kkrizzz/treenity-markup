import React from 'react';
import styled from '@emotion/styled';

import { Steps } from "antd";
const { Step } = Steps;

export function StepsDefault () {
    return(
        <Steps size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
        </Steps>
    );
}