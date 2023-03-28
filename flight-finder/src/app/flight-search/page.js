"use client"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FlightList from "../(components)/FlightList";



export default function flightSearch ({  }) {

    const [results, setResults] = useState('')
    const [oneWay, setOneWay] = useState('')
    const [returns, setReturns] = useState('')
    const [selected, setSelected] = useState(false)

   useEffect(() => {
        setResults(JSON.parse(localStorage.getItem('results')))
        console.log('BJARNE')
        setOneWay(results.oneWay)
        setReturns(results.returnFlights)
         console.log(oneWay)
         console.log(returns)
      }, [])
    if (results){
        return (
            
           <div>
            <FlightList flights={results} />

           </div>
        )
    }
    return;
}
