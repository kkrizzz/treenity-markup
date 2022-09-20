import React from 'react';
import styled from '@emotion/styled';

import { Steps } from "antd";
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
const { Step } = Steps;

export function StepsFull () {
    return(
        <Steps size="small">
            <Step status="finish" title="Login" icon={<UserOutlined />} />
            <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
            <Step status="process" title="Pay" icon={<LoadingOutlined />} />
            <Step status="wait" title="Done" icon={<SmileOutlined />} />
        </Steps>
    );
}