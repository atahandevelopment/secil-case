import { expect, it } from 'vitest';
import Home from '..';
import renderer from 'react-test-renderer';

it('renders Home component correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
