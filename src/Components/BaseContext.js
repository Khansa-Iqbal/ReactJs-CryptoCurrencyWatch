import React,{useState} from 'react';

export const BaseContext = React.createContext();
export const BaseProvider = (props) => {
  const [base, setBase] =  useState('');
   return(
       <BaseContext.Provider value={[base, setBase]}>
       {props.children}
       </BaseContext.Provider>
        );
}
export const TimePeriodContext = React.createContext();
export const TimePeriodProvider= (props)=>
{
   const [timeperiod, setTimeperiod] =  useState('');
   return(
       <TimePeriodContext.Provider value={[timeperiod, setTimeperiod]}>
       {props.children}
       </TimePeriodContext.Provider>
        );
}


    