import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import '../Styles/CurrencyDisplay.css';

function LineChart(props) {

    const [pricehistory, fetchPriceHistory]= useState([])
    const[loading, setLoading] = useState(true)
    const chartData= {
        labels: pricehistory.map(p => (p.timestamp)),
        datasets:[ {
            label: 'Price', 
            data: pricehistory.map(p => (p.price)),
            borderColor: ['rgba(236,64,122, 0.8)'],
            backgroundColor:['rgba(255, 99, 71, 0.2)'],
            pointBackgroundColor:'rgba(96,72,140, 0.8)',
            pointBorderColor:'rgba(236,64,122, 0.8)'
        }],
        }
    useEffect( ()=>{
            if(props.timeperiod==='' ){
                axios.get(`https://api.coinranking.com/v1/public/coin/${props.id}/history/24h`)
            .then(response =>
                {
                    fetchPriceHistory(response.data.data.history)
                    setLoading(false)
                })
            .catch(error => {
                console.log(error)
                console.log('Could not fetch the price history from the API!')
                setLoading(false)})
            }  
            else{
                axios.get(`https://api.coinranking.com/v1/public/coin/${props.id}/history/${props.timeperiod}`)
            .then(response =>
                {
                    fetchPriceHistory(response.data.data.history)
                    setLoading(false)
                })
            .catch(error => {
                console.log(error)
                console.log('Could not fetch the price history from the API!')
                setLoading(false)})
            }  
    
    },[props.id, props.timeperiod])
    return(
        <div className="ChartStyle">
        <Line data= {chartData}/>
        </div>
    )
}
export default LineChart