import PrincipalCard from "./PrincipalCard";

const routeImg = './img/Imageofemployee.png';

export default {
    title: 'Molecules/PrincipalCard',
    component: PrincipalCard,
};

const Template = (args) => <PrincipalCard {...args}/>

export const Primary = Template.bind({});
Primary.args = { title: 'Desarrollo', img: routeImg, units: '130', users: '325' };