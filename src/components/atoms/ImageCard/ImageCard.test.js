import renderer from 'react-test-renderer'
import ImageCard from './ImageCard';

const props = {
    imgDir: './img/logo1.png',
    size: 18
};

it('renders correctly', () => {
    const render = renderer.create(<ImageCard {...props}/>).toJSON();
    expect(render).toMatchSnapshot();
});