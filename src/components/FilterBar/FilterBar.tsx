import Box from "@mui/material/Box";
import {Grid, Paper, TextField} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

const data = [
    {title: "Item 1"},
    {title: "Item 2"},
    {title: "Item 3"},
    {title: "Item 4"}
];
const FilterBar = () => {

    return (
        <Box>
            <Paper>
                <Grid container spacing={2} sx={{p: 1}}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={data}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="filterSelectedOptions"
                                    placeholder="Favorites"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={data}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="filterSelectedOptions"
                                    placeholder="Favorites"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={data}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="filterSelectedOptions"
                                    placeholder="Favorites"
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default FilterBar;