import React from 'react';
import styled from 'styled-components';
import SHOES from '../../constants/data';
import ShoeCard from '../ShoeCard';

type Props = {};

const ShoeGrid = (props: Props) => {
  return (
    <Wrapper>
      {SHOES.map(shoe => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ShoeGrid;
