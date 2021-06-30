import logo from './logo.svg';
import './App.css';

//Special in the world of react family
const App = () => {
  //local variable
  let counter=100;
  
  const increment = ()=> {
   // alert("I am an increment function");
    counter +=1;
    console.log("I AM INCREMENT FUNCTION", counter);
  };

  return (
  <div> 
    <h1>Event Demo</h1>
    <h3>{counter}</h3>
    <input type="button" value="Increment" onClick={increment} />
  </div>  
  );
};

export default App;
