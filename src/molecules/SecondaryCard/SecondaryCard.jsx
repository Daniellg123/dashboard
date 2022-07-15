import { Card, Typography, Chip, Divider, Avatar, AvatarGroup } from '@mui/material';
import ImageCard from '../../atoms/ImageCard/ImageCard';

import './SecondaryCard.css';

function SecondaryCard({ img, title, users, name, position }) {
    return (
        <Card className='card'>
            <div className='content'>
                <ImageCard imgDir={img} size={48}/>
                <Typography variant='body2'>{title}</Typography>
                <Chip label="Total Users" />
            </div>
            <Divider variant='middle'/>
            <div className='content'>
                <div className='infoP'>
                    <ImageCard imgDir={img} size={24}/>
                    <div>
                        <Typography variant='body1'>{name}</Typography>
                        <Typography variant='body3'>{position}</Typography>
                    </div>
                </div>
                <div className='info'>
                    <Typography variant='body1'>Users {users}</Typography>
                    <AvatarGroup >
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>
                        <Avatar src='' sx={{ height: '24px', width: '24px' }}/>                        
                    </AvatarGroup>
                </div>
            </div>
        </Card>
    );
};

export default SecondaryCard;