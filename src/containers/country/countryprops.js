import React,{useState} from 'react';
import Cityprops from './cityprops';

function Countryprops(props) {

    const [country,setCountry]= useState('canada'); 

    const changeCountry = () => {
             setCountry('NZ');
         }

    return (
        <div>
            <p>country:{country}</p>
            <Cityprops changeCountry={country}/>
            <button onClick={() => changeCountry()}>change</button>
        </div>
    );
}

export default Countryprops;