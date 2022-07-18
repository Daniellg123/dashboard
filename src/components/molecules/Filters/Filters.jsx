import { Button, Typography } from "@mui/material";
import { Funnel } from "phosphor-react";

function Filters() {
    return(
        <Button variant="outlined" sx={{ borderColor: "#C4C8CF",}}>
            <Funnel size={17}/>
            <Typography variant="body1">Filters</Typography>
        </Button>
    );
};

export default Filters;