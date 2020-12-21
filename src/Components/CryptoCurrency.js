import React, {useContext}from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';
import '../Styles/CurrencyDisplay.css';

const CryptoCurrency = (props) => {
    return(
        <div>
            {props.cryptocurrency ? (
                (<Card>
                    <CardMedia className='CardStyle'
                    image ={props.cryptocurrency.iconUrl}
                    title={props.cryptocurrency.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component ="h2">
                            {props.cryptocurrency.name}
                        </Typography>
                        <Typography component ="p" >
                            <b>Market capital: <div className='Highlight'> {props.cryptocurrency.marketCap} </div></b>
                           <b>% Change in 24 hours: <div className='Highlight'> {props.cryptocurrency.change}</div></b> 
                        </Typography>
                    </CardContent>
                    <CardActions>
                       <Link to ={`/${props.cryptocurrency.id}`}>
                        <Button size="small" color ="primary"  target="_blank">
                            Show the currency details
                        </Button>
                        </Link>
                    </CardActions>
                </Card>)
            ) : null}
        </div>
    )
}
export default CryptoCurrency