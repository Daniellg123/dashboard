import { render } from '@testing-library/react';
import PrincipalCard from './PrincipalCard';

const props = {
    img: './img/logo1.png',
    title: 'Titulo',
    units: 213,
    users: 20,
    selected: false
};

it('renders correctrly', () => {
    const component = render(<PrincipalCard {...props} />)
    expect(component).toMatchSnapshot();
});

it('Title is equal to title props', () => {
    const component = render(<PrincipalCard {...props} title={'Daniel'} />)
    component.getByText('Daniel');
});

it('renders correctrly when is not selected', () => {
    const component = render(<PrincipalCard {...props} selected={false} />)
    expect(component).toMatchSnapshot();
});