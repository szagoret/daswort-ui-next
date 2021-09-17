import React, {useState} from "react";
import Box from "@mui/material/Box";
import TopBar from "../TopBar/TopBar";
import NavBar from "../NavBar/NavBar";
import InboxIcon from "@mui/icons-material/MoveToInbox";

declare interface DefaultLayoutProps {
    children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
    const {children} = props;
    const [drawerOpen, setDrawerOpen] = useState(true);
    const toggleDrawer = () => setDrawerOpen((prev: boolean) => !prev);
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
    return (
        <Box sx={{display: 'flex'}}>
            <TopBar name="DarWort" onToggle={toggleDrawer}/>
            <NavBar open={drawerOpen} items={drawerItems} handleDrawerToggle={toggleDrawer}/>
            <Box component="main" sx={{flexGrow: 1, p: 3, mt: 5}}>
                {children}
            </Box>
        </Box>
    );
};

export default DefaultLayout;