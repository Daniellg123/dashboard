import SecondaryCard from "./SecondaryCard";

const routeImg = './img/Imageofemployee.png';
const routeImg2 = './img/logo1.png';

export default {
    title: 'Molecules/SecondaryCard',
    component: SecondaryCard,
};

const Template = (args) => <SecondaryCard {...args} />

export const Primary = Template.bind({});
Primary.args = {img: routeImg, imgP: routeImg2 , title: 'Diseño UX', users: 300, units: 43, name: 'Daniel', position: 'Maestro', selected: false};