import renderer from 'react-test-renderer'
import ButtomText from './ButtomText';

const props = {
    text: 'Texto 123'
};

it('renders correctly', () => {
    const render = renderer.create(<ButtomText {...props}/>).toJSON();
    expect(render).toMatchSnapshot();
});