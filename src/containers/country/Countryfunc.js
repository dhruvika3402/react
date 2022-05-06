import React, { useState } from 'react';

function Countryfunc(props) {
    // const [country,setCountry]= useState('India');
    const [city,setCity]= useState('surat');
    const [gdp,setGdp]= useState(0)
    

    // const changeCountry = () => {
    //     setCountry('Uk');
    // }
    const changeCity = () => {
        setCity('gandinagar');
    }
    return (
        <div>
            <p>country[function base component]:{city}</p>
            {/* <button onClick={() => changeCountry()}>change</button> */}
            <button onClick={() => changeCity()}>change</button>
            <p>GDP:{gdp}</p>
            <button onClick={() => setGdp(5.5)}>change</button>
            
        </div>
    );
}

export default Countryfunc;