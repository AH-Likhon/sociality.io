import { Box, Card, CardContent, CardMedia, Grid, IconButton, Link, Typography } from '@mui/material';
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
import moment from 'moment/moment';
import notFound from '../../images/no-post-image.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const CardItem = ({ date, dateArr }) => {

    // const regex = `(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')`;
    // const regex = `/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi`;
    // const regex = `/(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i`;
    const regex = '/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i';





    console.log(dateArr);
    // console.log(secondDateArr);
    return (

        <>
            <Typography sx={{ color: 'gray', fontSize: '18px', mt: 5 }} component="div" variant="p">
                {date && moment(new Date(date)).format("Do MMMM YYYY")}
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    dateArr?.map((item, index) => (
                        <Grid key={index} item xs={4} sm={8} md={4}>
                            <Card sx={{ display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', mt: 1 }}>
                                <Box component="div"
                                    sx={{ width: '15%', backgroundColor: item.status === 0 ? '#F7BF38' : item.status === 1 ? '#3AC183' : item.status === 2 | 3 ? 'gray' : item.status === 4 ? '#FB6450' : '', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >

                                    <Link href={item.account.link} target="_blank" >
                                        {item.account.channel === 'facebook' && <FacebookIcon sx={{ color: '#fff', fontSize: '30px' }} />}
                                        {item.account.channel === 'twitter' && <TwitterIcon sx={{ color: '#fff', fontSize: '30px' }} />}
                                        {item.account.channel === 'instagrambusiness' && <InstagramIcon sx={{ color: '#fff', fontSize: '30px' }} />}
                                    </Link>
                                </Box>

                                <Box sx={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', width: '85%', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                                            <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                                {moment(new Date(item.published_at)).format("Do MMMM YYYY-LT")}
                                            </Typography>
                                            <Box>
                                                <BlockIcon sx={{ fontSize: '16px', mx: '1px', cursor: 'pointer' }} />
                                                <DeleteForeverIcon sx={{ fontSize: '16px', mx: '1px', cursor: 'pointer' }} />
                                                <PendingIcon sx={{ fontSize: '16px', mx: '1px', cursor: 'pointer' }} />
                                            </Box>
                                        </Box>
                                        <Typography sx={{ my: 2 }} component="div" variant="p">
                                            {item.entry.message}
                                        </Typography>

                                        <CardMedia
                                            sx={{ my: 2 }}
                                            component="img"
                                            height="250"
                                            image={regex.match(item.entry.image) ? notFound : item.entry.image}
                                            alt={item.account.name}
                                        />

                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                                            <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', gap: "2px", cursor: 'pointer' }}>
                                                <ThumbUpOffAltIcon sx={{ fontSize: '16px', }} />
                                                <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                                    0
                                                </Typography>
                                            </Box>
                                            <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', gap: "2px", cursor: 'pointer' }}>
                                                <ChatBubbleOutlineIcon sx={{ fontSize: '16px', }} />
                                                <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                                    0
                                                </Typography>
                                            </Box>
                                            <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', gap: "2px", cursor: 'pointer' }}>
                                                <ShareIcon sx={{ fontSize: '16px', }} />
                                                <Typography sx={{ mt: '-3px' }} component="div" variant="span">
                                                    0
                                                </Typography>
                                            </Box>
                                            <Box sx={{ color: 'gray', display: 'flex', alignItems: 'center', gap: "2px", cursor: 'pointer' }}>
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
                    ))
                }
            </Grid>
        </>
    );
};

export default CardItem;