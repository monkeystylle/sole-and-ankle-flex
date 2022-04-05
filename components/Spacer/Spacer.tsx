import styled from 'styled-components';
import { serialize } from 'v8';

/* interface ISpacer {
  axis?: any;
  size?: any;
} */

type Margin = number | string;

type SpacerProps = {
  axis?: Margin;
  size?: Margin;
};

function getHeight({ axis, size }: SpacerProps) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }: any) {
  return axis === 'vertical' ? 1 : size;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;
