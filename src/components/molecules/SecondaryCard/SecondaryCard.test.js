import { render } from '@testing-library/react';
import SecondaryCard from './SecondaryCard';

const props = {
    img: './img/logo1.png', 
    imgP: './img/Avatar.png', 
    title: 'Titulo',
    name: 'Daniel', 
    position: 'Profesor', 
    selected: true,
    units: 12,
    users: 300,
};

describe(' Secondary card selected', () => {
    it('renders correctly', () => {
        const component = render(
            <SecondaryCard {...props}/>
        );
        expect(component).toMatchSnapshot();
    });
    
    it('Units is equal to prop users', () => {
        const component = render(<SecondaryCard {...props} users={14}/>)
        component.getByText('14 Total Users');
    });

    it('Name is equal to prop name', () => {
        const component = render(<SecondaryCard {...props} name={'Oswaldo'}/>)
        component.getByText('Oswaldo');
    });
});

describe(' Secondary card no selected', () => {
    it('renders correctly', () => {
        const component = render(
            <SecondaryCard {...props} selected={false}/>
        );
        expect(component).toMatchSnapshot();
    });
    
    it('Units is equal to prop units', () => {
        const component = render(<SecondaryCard {...props} selected={false} units={14}/>)
        component.getByText('14');
    });
    
    it('Units is equal to prop users', () => {
        const component = render(<SecondaryCard {...props} selected={false} users={14}/>)
        component.getByText('14');
    });
});

