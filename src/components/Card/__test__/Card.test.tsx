import { expect, it } from 'vitest';
import Card from '..';
import renderer from 'react-test-renderer';

it('renders Detail component correctly', () => {
  const tree = renderer.create(<Card data={{
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
          rate: 0,
          count: 0
      }
  }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
