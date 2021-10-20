import MyHeading from './Heading';

export default {
  title: 'Custom/Heading',
  component: MyHeading,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeading },
  template:
    '<my-heading v-bind="$props" />',
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  class: 'heading-large'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  class: 'heading-small'
};