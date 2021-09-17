import {Container} from "@mui/material";
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
        <Container>
            <TopBar name="DarWort" onToggle={toggleDrawer}/>
            <Box sx={{display: 'inline-flex', mt: 10}} component="nav">
                <NavBar open={drawerOpen} items={drawerItems}/>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    {children}
                </Box>
            </Box>
        </Container>
    );
};

export default DefaultLayout;