import InfoCard from "./InfoCard";

const routeImg = './img/Imageofemployee.png';

export default {
    title: 'Molecules/InfoCard',
    component: InfoCard,
};

const Template = (args) => <InfoCard {...args}/>

export const Primary = Template.bind({});
Primary.args = { title: 'Desarrollo', img: routeImg, units: '130', users: '325', selected: false };