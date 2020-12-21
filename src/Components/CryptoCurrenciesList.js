import React,{ useState,useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid' ;
import CryptoCurrency from './CryptoCurrency';
import axios from 'axios';
import Pagination from './Pagination';
import {BaseContext,TimePeriodContext}  from './BaseContext';
import '../Styles/CurrencyDisplay.css';

function CoinsList(){
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentCard, setCurrentCard]= useState(1);
    const [pagesize]= useState(8);

    const[base] =useContext(BaseContext);
    const[timeperiod] =useContext(TimePeriodContext);
      
    useEffect( ()=>{
        if(base === '' && timeperiod==='' ) {
            axios.get('https://api.coinranking.com/v1/public/coins')
            .then(response =>
                {
                    setCoins(response.data.data.coins)
                    setLoading(false);
                }       
                )
            .catch(error => {
                console.log(error)
                console.log('Could not fetch data from the API!')
                setLoading(false);
            })
            
        } 
        else{
        axios.get(`https://api.coinranking.com/v1/public/coins/?base=${base}&timePeriod=${timeperiod}`)
        .then(response =>
            {
                setCoins(response.data.data.coins)
                setLoading(false);
            }       
            )
        .catch(error => {
            console.log(error)
            console.log('Could not fetch data from the API!')
            setLoading(false);
        })
    }
    },[base,timeperiod])
  
    //Get current card
     const indexOfLastCard = currentCard*pagesize;
     const indexOfFirstCard = indexOfLastCard - pagesize;
     const currentCards = coins.slice(indexOfFirstCard, indexOfLastCard)

     //Change page
     const paginate= pageNumber => setCurrentCard(pageNumber);

    if(loading)
    {
        return(<h1>Loading the coins...  This might take a few seconds.</h1>)
    }
    else {
       return(
           <div>
               {currentCards ? (
                <div>
                    <Grid container spacing ={24}>
                        {currentCards.map(currentCard =>
                                (<Grid item xs ={12} sm={6} lg={4} xl ={3} className='Space'>
                                <CryptoCurrency cryptocurrency= {currentCard} key={currentCard.id}/>
                                </Grid>)
                        )}
                    </Grid>
                     <Pagination 
                    cardsPerPage= {pagesize}
                    totalCards= {coins.length}
                    paginate= {paginate}
                    />
                </div>  
               ): " "}
           </div>     
  )
 }
}

export default CoinsList
