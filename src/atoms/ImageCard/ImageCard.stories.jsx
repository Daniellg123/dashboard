import ImageCard from "./ImageCard";

const routeImg = './img/OrganizationChart.png';

export default {
    title: 'Atoms/ImageCard',
    component: ImageCard,
};

const Template = (args) => <ImageCard {...args}/>

export const Primary = Template.bind({});
Primary.args = { imgDir: routeImg, size: 48};