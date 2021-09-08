import React from 'react';
import TopBar from "../components/TopBar/TopBar";

export default {
    title: 'Components/TopBar',
    argTypes: {
      name: 'string'
    },
    component: TopBar
};
const Template = (args) => <TopBar {...args}/>;

export const Default = Template.bind({});

Default.args = {
  name: 'Das Wort'
};