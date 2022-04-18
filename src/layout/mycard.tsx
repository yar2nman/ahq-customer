import {Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    }
}));

export default function MyCard(props: any) {

    const classes = useStyles();
    const { title, description, image, link } = props;


    return (
        <>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </CardActions>
            </Card>

        </>
    )
}