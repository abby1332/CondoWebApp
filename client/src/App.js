//App.js
import axios from 'axios';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import PermitForm from './PermitForm'

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
      <Container>
          <Row>
            <PermitForm/>
          </Row>
      </Container>
    </div>
  );
}

export default App;