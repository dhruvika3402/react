import React,{useState} from 'react';

function Cityprops({changeCountry}) {
    console.log(changeCountry);
    // const [city,setCity]= useState('Toronto,CN Tower'); 

    // const changeCity = () => {
    //     setCity('Tongariro National Park ,Bay Of Islands');
    // }
    return (
        <div>
            {changeCountry ==='canada' ? <div>Famoue place -Toronto,CN Tower</div> :  <div>Famoue place -Tongariro National Park ,Bay Of Islands</div> }  
        </div>
    );
}

export default Cityprops;