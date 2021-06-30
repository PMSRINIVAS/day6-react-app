import logo from './logo.svg';
import './App.css';

//Special in the world of react family
const App = () => {
  //local variable
  let counter=100;
  let username="Capgemini";
  return (
  <div> 
    <h1>Hello World123</h1>
    <h1>{username}</h1>
    <h1>{counter}</h1>
  </div>
  );
};

export default App;
