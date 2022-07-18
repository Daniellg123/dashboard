import renderer from 'react-test-renderer'
import ButtonText from './ButtonText';

const props = {
    text: 'Texto 123'
};

it('renders correctly', () => {
    const render = renderer.create(<ButtonText {...props}/>).toJSON();
    expect(render).toMatchSnapshot();
});