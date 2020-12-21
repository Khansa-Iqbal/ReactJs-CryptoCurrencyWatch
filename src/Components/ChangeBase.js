import React,{useContext} from 'react';
import {BaseContext,TimePeriodContext}  from './BaseContext';
import '../Styles/CurrencyDisplay.css';

function ChangeBase(){
    const[base, setBase] =useContext(BaseContext);
    const[timeperiod, setTimeperiod] =useContext(TimePeriodContext);
return(
    <div className = 'DisplayStyle'>
        <div>
        <h1><label>Change Base:
             <select className='DropdownStyle'
             onChange={(e) => setBase(e.target.value)}
            defaultValue= 'USD' 
             > 
                 <option value="USD">USD</option>     
                 <option value="EUR">EUR</option>
                 <option value="JPY">JPY</option>
                 <option value="BTC">BTC</option>
                 <option value="ETH">ETH</option> 
            </select>
        </label></h1>
        </div>
        <div>
         <h1><label>Time Period:
            <select className='DropdownStyle'
            onChange={(e) =>setTimeperiod(e.target.value)}
            defaultValue= '24h'
            > 
                 <option value="24h">24 HOURS</option>     
                 <option value="7d">7 DAYS</option>
                 <option value="30d">30 DAYS</option>
                 <option value="1y">1 YEAR</option>
                 <option value="5y">5 YEARS</option> 
            </select>
        </label></h1>
        </div> 
    </div>
    
)

}
export default ChangeBase