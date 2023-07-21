import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav';
import { Card } from "react-bootstrap";
function MyNav({usr}) {
  return (
    <>
    <Navbar bg="dark" variant="dark" className='bg-opacity-50' >
        <Container>
          <Navbar.Brand href="#home"> 
          <Image src="/logo.svg" alt="Vercel Logo" width={40} height={40} className="d-inline-block align-top" />
          </Navbar.Brand>
          <Card.Text className='text-white'>Escuela Digital Arg
            </Card.Text>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>   
        <Nav.Link href="/login">Ingresar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/regis" eventKey="/regis">Registrarse</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    </Navbar>
    </>
  );
}
export default MyNav;