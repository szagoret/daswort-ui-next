import {Box, Theme} from "@mui/material";
import {styled} from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import {CSSObject} from "@emotion/react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from "react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 5px)`,
    },
});
const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

// const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
//     ({theme, open}) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         display: 'block',
//         [`& .MuiDrawer-docked`]: {width: drawerWidth, boxSizing: 'border-box'},
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-docked': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-docked': closedMixin(theme),
//         }),
//     }),
// );

declare interface NavBarDrawerItem {
    label: string,
    icon: React.ReactNode
}

declare interface NavBarProps {
    open: boolean,
    items: NavBarDrawerItem[]
}

const NavBar: React.FC<NavBarProps> = ({open, items}) => (
    <Box component="nav"
         sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
         aria-label="mailbox folders"
    >
        <Drawer variant="temporary" open={open}
                // onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth
                    }
                }}
        >
            <DrawerHeader/>
            <List>
                {items.map((({icon, label}, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label}/>
                    </ListItem>
                )))
                }
            </List>
        </Drawer>
    </Box>
);

export default NavBar;