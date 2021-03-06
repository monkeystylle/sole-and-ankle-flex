import styled from 'styled-components';
import { useState } from 'react';
import type { NextPage } from 'next';

import Header from '../components/Header';

import Icon from '../components/Icon';
import ShoeIndex from '../components/ShoeIndex';

const Home: NextPage = () => {
  const [sortId, setSortId] = useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default Home;
