import * as React from 'react';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {grey} from '@mui/material/colors';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: grey["100"],//alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: grey["200"],//alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.complex
        }),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));

export declare interface TopBarProps {
    name: String,
    onToggle: () => void
}

const TopBar = ({name, onToggle}: TopBarProps) => (
    <Box sx={{flexGrow: 1}}>
        <AppBar position="fixed">
            <Toolbar
                sx={{
                    bgcolor: 'common.white',
                    color: 'text.secondary',
                    borderStyle: 'solid',
                    borderColor: '#EAEEF3',
                    borderWidth: 0,
                    borderBottomWidth: 'thin'
                }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{mr: 2}}
                    onClick={() => onToggle()}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
                >
                    {name}
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon sx={{
                            color: '#007FFF'
                        }}/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    </Box>
);
export default TopBar
