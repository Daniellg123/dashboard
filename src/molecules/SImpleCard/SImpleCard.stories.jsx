import SimpleCard from "./SimpleCard";

const routeImg = './img/logo1.png';

export default {
    title: 'Molecules/SimpleCard',
    component: SimpleCard,
};

const Template = (args) => <SimpleCard {...args}/>

export const Primary = Template.bind({});
Primary.args = { title: 'Desarrollo', img: routeImg };