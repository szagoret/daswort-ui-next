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
        <Box component={Paper} variant="outlined" sx={{display: 'flex', flexGrow: 1}}>
            <Grid container spacing={2}
                  sx={{p: 1}}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={data}
                        size="small"
                        getOptionLabel={(option) => option.title}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Label 0"
                                placeholder="Favorites"
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={data}
                        size="small"
                        getOptionLabel={(option) => option.title}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Label 1"
                                placeholder="Favorites"
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={data}
                        size="small"
                        getOptionLabel={(option) => option.title}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Label 2"
                                placeholder="Favorites"
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default FilterBar;