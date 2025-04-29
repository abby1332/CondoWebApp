import axios from 'axios';
import './App.css';
import './index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

import PermitForm from './component/PermitForm';
import Header from './component/Header';
import Footer from './component/Footer';

// Example API call (not used in this file directly but can be moved into PermitForm if needed)
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
  });
};

function App() {
  return (
    <>
      <Header />

      <div id="permit" className="content">
        <Container>
          <Row>
            <PermitForm />
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default App;
