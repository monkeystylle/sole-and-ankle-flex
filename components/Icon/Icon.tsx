import React from 'react';
import styled from 'styled-components';
import { Search, Menu, ShoppingBag, ChevronDown } from 'react-feather';

const icons = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
};

const Icon = ({ id, color, size, strokeWidth, ...props }: any) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...props}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div<any>`
  & > svg {
    display: block;
    stroke-width: ${p => p.strokeWidth}px;
  }
`;

export default Icon;
