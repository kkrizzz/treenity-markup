import React, { FunctionComponent } from 'react';
import TreeAntNav from '../../ant/tree';
import styled from '@emotion/styled';

const ExplorerContainerStyled = styled.div`
  width: 100%;
  padding: 0 24px;
  margin-bottom: 40px;
  b {
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #a7a2bd;
    display: block;
    margin-bottom: 14px;
  }
`;

const Explorer:FunctionComponent = () => {
  return (
    <ExplorerContainerStyled>
      <b>Explorer</b>
      <TreeAntNav />
    </ExplorerContainerStyled>
  );
}

export default Explorer