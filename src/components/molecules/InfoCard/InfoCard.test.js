import { render } from '@testing-library/react';
import InfoCard from './InfoCard';

const props = {
    units: 12,
    users: 300,
};

it('renders correctly', () => {
    const component = render(
        <InfoCard {...props}/>
    );
    expect(component).toMatchSnapshot();
});

it('Units is equal to prop units', () => {
    const component = render(<InfoCard {...props} units={14}/>)
    component.getByText('14 Units');
});

it('Units is equal to prop users', () => {
    const component = render(<InfoCard {...props} users={14}/>)
    component.getByText('14 Users');
});