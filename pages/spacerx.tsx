import styled from 'styled-components';
import { useState } from 'react';
import type { NextPage } from 'next';
import Spacer from '../components/Spacer';

const Spacerx: NextPage = () => {
  const [sortId, setSortId] = useState('newest');

  return (
    <>
      <Main>
        hey
        <Spacer size={128} />
        hey
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default Spacerx;
