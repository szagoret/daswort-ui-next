import React from 'react';
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import InboxIcon from "@mui/icons-material/MoveToInbox";

export default {
    title: 'Components/NavBar',
    argTypes: {
        open: 'boolean',
        items: 'array'
    },
    component: TopBar
};
const Template = (args) => (<NavBar {...args} />);

export const Default = Template.bind({});
const drawerItems = [
    {
        label: 'Item 1',
        icon: <InboxIcon/>

    },
    {
        label: 'Item 2',
        icon: <InboxIcon/>

    },
    {
        label: 'Item 3',
        icon: <InboxIcon/>

    }
];
Default.args = {
    open: true,
    items: drawerItems
};