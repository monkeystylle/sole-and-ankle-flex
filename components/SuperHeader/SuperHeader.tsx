import styled from 'styled-components';
import { COLORS } from '../../styles/constants';
import Icon from '../Icon';
import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';

type Props = {};

const SuperHeader = (props: Props) => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

export default SuperHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;
