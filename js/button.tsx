import styled from '@emotion/styled';
import React from 'react';

export const Button = ({ color, onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
const LayoutDiv: React.FC = styled.div`
  margin: 32px;
`;
const Page = () => {
  return (
    <LayoutDiv>
      <Button>Click Me</Button>
    </LayoutDiv>
  );
};

export default Page;
