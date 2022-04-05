import styled from 'styled-components';
import { WEIGHTS } from '../../styles/constants';
import Breadcrumbs from '../Breadcrumbs';

import Select from '../Select';
import ShoeGrid from '../ShoeGrid';
import ShoeSideBar from '../ShoeSideBar';
import Spacer from '../Spacer';

type Props = {};

const ShoeIndex = ({ sortId, setSortId }: any) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={ev => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSideBar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const LeftColumn = styled.div``;

const MainColumn = styled.div``;

const Header = styled.header``;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;