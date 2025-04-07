//App.js
import axios from 'axios';
import './App.css';

//Data will be the string sent from the server
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //This console.log goes to the frontend
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make the API call!</button>
      </header>
    </div>
  );
}

export default App;