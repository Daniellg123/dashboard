import { render } from '@testing-library/react';
import SimpleCard from './SimpleCard';

const props = {
    img: './img/logo1.png',
    title: 'Titulo',
};

it('renders correctrly', () => {
    const component = render(<SimpleCard {...props} />)
    expect(component).toMatchSnapshot();
});

it('Title is equal to title props', () => {
    const component = render(<SimpleCard {...props} title={'Tutiloo22'} />)
    component.getByText('Tutiloo22');
});