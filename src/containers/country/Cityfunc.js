import React, { useState } from 'react';

function Cityfunc(props) {
    const[city,setCity] = useState('Surat')
    const[food,popularfood] = useState('locho')

    const changeCity = ()=>{
        setCity('rajkot')
    }
    
    return (
        <div>
            <p>[function base component:]{city}</p>
            <p>[popularfood food:]{food}</p>
            <button onClick={()=>{
                changeCity();
                popularfood('pakodi');
            }}>change</button>

        </div>
    );
}

export default Cityfunc;