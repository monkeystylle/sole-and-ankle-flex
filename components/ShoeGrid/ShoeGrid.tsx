import React from 'react';
import styled from 'styled-components';
import SHOES from '../../constants/data';
import ShoeCard from '../ShoeCard';

type Props = {};

const ShoeGrid = (props: Props) => {
  return (
    <Wrapper>
      {SHOES.map(shoe => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  flex: 1;
  margin: 16px;
`;

export default ShoeGrid;
