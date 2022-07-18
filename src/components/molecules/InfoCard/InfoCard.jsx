import PropTypes from 'prop-types';
import { Card, Divider, Typography } from "@mui/material";

import "./InfoCard.css";

function InfoCard({ units, users }) {
    return (
        <Card className="infoCard">
            <Typography variant="body4">Child Hierarchy</Typography>
            <div className="infoSub">
                <Typography variant="body3">{units} Units</Typography>
                <Divider variant='middle' />
                <Typography variant="body3">{users} Users</Typography>
            </div>
        </Card>
    );
};

InfoCard.propTypes = {
    /**
     * Units 
     */
    units: PropTypes.number,
    /**
     * Users
     */
    users: PropTypes.number
};

export default InfoCard;