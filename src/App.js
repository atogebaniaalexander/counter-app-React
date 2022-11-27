import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <br></br>
      <div className="block">
        <Counter value = {1}/>
      </div>
      <br></br>
      <div className="block">
        <Counter value = {5}/>
      </div>
      <br></br>
      <div className="block">
        <Counter value = {10}/>
      </div>
     
    </div>
  );
}

export default App;
