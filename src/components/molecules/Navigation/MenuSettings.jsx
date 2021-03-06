import PropTypes from 'prop-types';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

import { useNavigate } from "react-router-dom";

import { 
    Briefcase, 
    Buildings, 
    Coffee, 
    Flag, 
    Globe, 
    Sliders, 
    Users
} from 'phosphor-react';

function MenuSettings({ openMenu, handleClose, drawerWidth, openDrawer }) {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <div>
            <Menu
                open={openMenu}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{ 
                    top: theme.mixins.toolbar.minHeight + 10, 
                    left: openDrawer ? drawerWidth : theme.mixins.toolbar.minHeight + 10
                }}
            >
                <MenuItem onClick={()=>{}}>
                    <Sliders size={18} />
                    <Typography variant='body1'>My Settings</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{}}>
                    <Globe size={18} />
                    <Typography variant='body1'>Organization</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{}}>
                    <Buildings size={18} />
                    <Typography variant='body1'>Business Units</Typography>
                </MenuItem>
                <MenuItem onClick={() => {navigate('/orgunits')}}>
                    <Flag size={18} />
                    <Typography variant='body1'>Organizational Units</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{}}>
                    <Coffee size={18} />
                    <Typography variant='body1'>Lists & Groups</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{}}>
                    <Briefcase size={18} />
                    <Typography variant='body1'>Job Titles</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{}}>
                    <Users size={18} />
                    <Typography variant='body1'>Users</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
};

MenuSettings.propTypes = {
    /**
     * Booleano para saber si el men?? est?? abierto
     */
    openMenu: PropTypes.bool, 
    /**
     * Funci??n para cerrar el men?? de ajustes
     */
    handleClose: PropTypes.func, 
    /**
     * N??mero indicador de anchura del drawer
     */
    drawerWidth: PropTypes.number, 
    /**
     * Booleano para saber si se abri?? el drawer
     */
    openDrawer: PropTypes.bool
};

export default MenuSettings;