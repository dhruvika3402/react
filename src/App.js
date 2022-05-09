import './App.css';
import Country from './containers/country/country';
import City from './containers/country/city';
import Countryfunc from './containers/country/Countryfunc';
import Cityfunc from './containers/country/Cityfunc';
import Countryprops from './containers/country/countryprops';



function App() {

  

  return (
    <>
      <Country /> 
      <City/>
      <Countryfunc />
      <Cityfunc/> 
      <Countryprops/>    
        
    </>
  );
}

export default App;
