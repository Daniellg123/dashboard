import renderer from 'react-test-renderer';
import Filters from './Filters';

it('renders correctly', () => {
    const render = renderer.create(
        <Filters />
    ).toJSON();
    expect(render).toMatchSnapshot();
});