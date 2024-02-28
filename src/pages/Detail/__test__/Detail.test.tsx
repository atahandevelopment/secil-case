import { expect, it } from 'vitest';
import Detail from '..';
import renderer from 'react-test-renderer';

it('renders Detail component correctly', () => {
  const tree = renderer.create(<Detail />).toJSON();
  expect(tree).toMatchSnapshot();
});
