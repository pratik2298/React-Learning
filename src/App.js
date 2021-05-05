//import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome_ClassComponent'
import { Hello } from './components/Hello_JSX'
import { GreetToAll } from './components/Greet_Props'
function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      <Welcome firstName="Ryan" lastName="Doe"/>
      <Welcome firstName="Phoenix" lastName="Duelist"/>
      <Welcome firstName="Reyna" lastName="Duelist"/>
      {/* <Hello/> */}
      {/* <GreetToAll firstName="Ryan" lastName="Doe">
        <h6>Ryan is Software Engineer</h6>
      </GreetToAll>

      <GreetToAll firstName="Bruce" lastName="Wayne">
        <h6>Bruce is a Batman</h6>
      </GreetToAll>

      <GreetToAll firstName="Clark" lastName="Smith"></GreetToAll>
        <h6>Clark is a Boxer</h6> */}
    </div>
  );
}

export default App;
