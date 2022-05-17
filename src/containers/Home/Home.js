import React from 'react';

function Home({data}) {
    return (
       data.map((d,i) => {
           return(
               <>
               <h2>{d.id}</h2>
               <h3>{d.name}</h3>
               </>
           )
       })
    );
}

export default Home;