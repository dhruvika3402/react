import { useEffect, useState } from 'react';
import './App.css';
import Loading from './component/Loading/Loading';
import Home from './containers/Home/Home';



let LoadingWithHome = Loading(Home);

function App() {

  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);

  let orgData = [
    {id: 101,name: 'dhruvika'},
    {id: 102,name: 'dhruvi'}
  ]

  useEffect(
    () => {
      setLoading(true);
      setTimeout(()=> {setLoading(false);setData(orgData)},2000);
    },
  [])
  
  console.log(loading,data);

  return (
    <>
      <LoadingWithHome isLoading={loading} data={data}/>

    </>
  );
}

export default App;
