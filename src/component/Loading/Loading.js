import React from 'react';

function Loading(Component) {
    return function withLoadingAnycomponent({isLoading,data}) {
        console.log(isLoading,data);
        if(isLoading){
            return(
                <p>LOADING...</p>
            )
         }else{
            return(<Component data={data}/>)
        }
        

}
}

export default Loading;