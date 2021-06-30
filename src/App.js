import logo from './logo.svg';
import './App.css';

//Special in the world of react family
const App = () => {
  //local variable
  let counter=100;
  let username="Capgemini";
  let list=["Delhi", "Kolkata","Mumbai","Chennai"];
  return (
  <div> 
    <h1>Hello World123</h1>
    <h1>{username}</h1>
    <h1>{counter}</h1>

//By using .map we can get the list items dynamically
    <h1>Dynamic Web Site</h1>
    {list.map((item) => (
      <h3>{item}</h3>
    )
    )}
   //hardcode it manually 
    <h1>Static Web Site</h1>
    <h3>Delhi</h3>
    <h3>Kolkata</h3>
    <h3>Mumbai</h3>
    <h3>Chennai</h3>
  </div>
  );
};

export default App;
