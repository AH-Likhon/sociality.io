import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import PendingIcon from '@mui/icons-material/Pending';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BlockIcon from '@mui/icons-material/Block';
import DoneIcon from '@mui/icons-material/Done';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CardItem = () => {
    return (

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={4} sx={{}}>
                <Card sx={{ display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', }}>
                    <Box component="div"
                        sx={{ width: '15%', backgroundColor: '#F7BF38', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <FacebookIcon sx={{ color: '#fff', fontSize: '25px' }} />
                    </Box>

                    <Box sx={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', width: '85%', }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                                <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                    Date
                                </Typography>
                                <Box>
                                    <BlockIcon sx={{ fontSize: '16px', mx: '1px' }} />
                                    <DeleteForeverIcon sx={{ fontSize: '16px', mx: '1px' }} />
                                    <PendingIcon sx={{ fontSize: '16px', mx: '1px' }} />
                                </Box>
                            </Box>
                            <Typography sx={{ my: 2 }} component="div" variant="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elements eu.
                            </Typography>
                            <CardMedia
                                sx={{ my: 2 }}
                                component="img"
                                height="250"
                                image="https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg"
                                alt="green iguana"
                            />

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                                <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', gap: "2px" }}>
                                    <ThumbUpOffAltIcon sx={{ fontSize: '16px', }} />
                                    <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                        0
                                    </Typography>
                                </Box>
                                <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', gap: "2px" }}>
                                    <ChatBubbleOutlineIcon sx={{ fontSize: '16px', }} />
                                    <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                        0
                                    </Typography>
                                </Box>
                                <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', gap: "2px" }}>
                                    <ShareIcon sx={{ fontSize: '16px', }} />
                                    <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                        0
                                    </Typography>
                                </Box>
                                <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', gap: "2px" }}>
                                    <VisibilityIcon sx={{ fontSize: '16px', }} />
                                    <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                        0
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CardItem;