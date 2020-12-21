import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import '../App.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import {BaseContext,TimePeriodContext}  from './BaseContext';
import LineChart from './LineChart';
import '../Styles/CurrencyDisplay.css';

const DisplayCurrency = props =>{
    
    const [coinDetails, fetchCoinDetails]= useState({})
    const[loading, setLoading] = useState(true)

    const[base] =useContext(BaseContext);
    const[timeperiod] =useContext(TimePeriodContext);

    useEffect( ()=>{
        if(base === '' && timeperiod==='' ) {
            axios.get(`https://api.coinranking.com/v1/public/coin/${props.match.params.id}`)
            .then(response =>
                {
                    fetchCoinDetails(response.data.data.coin)
                    setLoading(false)
                })
            .catch(error => {
                console.log(error)
                console.log('Could not fetch the card details from the API!')
                setLoading(false)
    })    
        } 
        else{
            axios.get(`https://api.coinranking.com/v1/public/coin/${props.match.params.id}?base=${base}&timePeriod=${timeperiod}`)
            .then(response =>
                {
                    fetchCoinDetails(response.data.data.coin)
                    setLoading(false)
                } )
            .catch(error => {
                console.log(error)
                console.log('Could not fetch the card details from the API!')
                setLoading(false);
        })
    }
    },[base,timeperiod])
    const handleBack =() =>{
      props.history.goBack();
    }
    if(loading)
    {
        return(<h1>Loading the coin details...  This might take a few seconds.</h1>)
    }
    else{
    return(
        <div className ="CoinDetails">
           <h1 className='Heading'>COIN DETAILS!</h1>
            <h1><img src={coinDetails.iconUrl} alt="" width="50" height="50"/>{coinDetails.name}</h1>
           <div>
           <LineChart 
           id ={props.match.params.id}
           timeperiod={timeperiod}
           key={props.match.params.id}
           />
           </div>
           <h3>
           <br/>
           Rank: {coinDetails.rank} <br/>
           Price: {coinDetails.price} <br/>
           </h3>
           <br/>
           <Button
            onClick ={handleBack}
            variant="contained"
            color="secondary"
            startIcon={<ArrowBackIcon/>}
            >
            TO DASHBOARD
        </Button>
        <br/><br/>
        </div>
    )
    }
}
export default DisplayCurrency