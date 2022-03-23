import styled from 'styled-components';
import { WEIGHTS } from '../../styles/constants';

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link>
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
