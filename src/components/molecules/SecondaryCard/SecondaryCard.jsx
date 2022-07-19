import PropTypes from 'prop-types';
import { Card, Typography, Chip, Divider, Avatar, AvatarGroup } from '@mui/material';
import ImageCard from '../../atoms/ImageCard/ImageCard';
import InfoCard from '../InfoCard/InfoCard';
import PrincipalCard from '../PrincipalCard/PrincipalCard';

import './SecondaryCard.css';

/**
 * Componente para mostrar más información
 */

function SecondaryCard({ img, imgP, title, users, units, name, position, selected }) {
    return (
        <>
            {!selected ?
                (<PrincipalCard img={img} title={title} users={users} units={units} />)
                :
                (
                    <div className='subInfoCard'>
                        <Card className='card1'>
                            <div className='content'>
                                <div className='c'>
                                    <ImageCard imgDir={img} size={48} />
                                    <Typography variant='body2'>{title}</Typography>
                                </div>
                                <div className='c'>
                                    <Chip label={`${users + ' Total Users'}`} />
                                </div>
                            </div>
                            <Divider variant='middle' />
                            <div className='content'>
                                <div className='c'>
                                    <ImageCard imgDir={imgP} size={24} />
                                    <div>
                                        <Typography variant='body1'>{name}</Typography>
                                        <Typography variant='body3'>{position}</Typography>
                                    </div>
                                </div>
                                <div className='c'>
                                    <Typography variant='body1'>Users ({users})</Typography>
                                    <AvatarGroup >
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                        <Avatar src='' sx={{ height: '24px', width: '24px' }} />
                                    </AvatarGroup>
                                </div>
                            </div>
                        </Card>
                        <InfoCard units={units} users={users} />
                    </div>
                )
            }
        </>
    );
};

SecondaryCard.propTypes = {
    /**
     * Ruta de la imagen del Card
     */
    img: PropTypes.string, 
    /**
     * Ruta de la imagen de la persona
     */
    imgP: PropTypes.string,
    /**
     * Titulo del card
     */
    title: PropTypes.string, 
    /**
     * Numero de users
     */
    users: PropTypes.number, 
    /**
     * Númerp de units
     */
    units: PropTypes.number, 
    /**
     * Nombre de la persona
     */
    name: PropTypes.string, 
    /**
     * Cargo de la persona
     */
    position: PropTypes.string, 
    /**
     * Booleano para saber si fue seleccionado
     */
    selected: PropTypes.bool
};

export default SecondaryCard;