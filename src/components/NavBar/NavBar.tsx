import {Theme} from "@mui/material";
import {styled} from "@mui/material/styles";
import MuiDrawer from '@mui/material/Drawer';
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

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

declare interface NavBarDrawerItem {
    label: string,
    icon: React.ReactNode
}

declare interface NavBarProps {
    open: boolean,
    items: NavBarDrawerItem[]
}

const NavBar: React.FC<NavBarProps> = ({open, items}) => (
    <Drawer variant="permanent" open={open}>
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
    </Drawer>);

export default NavBar;