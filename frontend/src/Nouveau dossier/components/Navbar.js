import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../../src/css/Header.css'; // Import du fichier CSS


function Navbar() {
  return <div className='nouri'>
    <Navbar bg="light" expand="lg"  >
      <Container  >
        <Navbar.Brand href="#home" className='nouri'>Corporate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='nouri' href="/home">Home</Nav.Link>
            <Nav.Link className='nouri' href="/Inscription">Inscription</Nav.Link>
            <Nav.Link className='nouri' href="/Demande">Demande</Nav.Link>
            <Nav.Link className='nouri' href="/Demande">login</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
}

export default Navbar;



