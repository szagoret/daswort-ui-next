import {createTheme} from "@mui/material";
import {orange} from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface Theme {
        shape: {
            borderRadius: number
        },
        status: {
            danger: string;
        };
    }

    interface ThemeOptions {
        shape: {
            borderRadius: number
        },
        status?: {
            danger?: string;
        };
    }
}

export default createTheme({
    shape: {
        borderRadius: 8,
    },
    status: {
        danger: orange[500],
    }
});

