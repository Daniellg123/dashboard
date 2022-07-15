import ButtonText from "./ButtonText";

export default {
    title: 'Molecules/ButtonText',
    component: ButtonText,
};

const Template = (args) => <ButtonText {...args}/>

export const Primary = Template.bind({});
Primary.args = { text: 'Hola' };