import React from 'react';
import Table from '../../features/Table';
import { ListGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {



  return (
    <ListGroup >
    <ListGroup.Item>
    Table 1
    <Nav className="me-auto">
  <Nav.Link as={NavLink} to="/tableform">Table</Nav.Link>
</Nav>
  </ListGroup.Item>
  <ListGroup.Item>
    Table 2
    <Button variant="primary" component={NavLink} to="/tableform" >Show more
    </Button>
  </ListGroup.Item>
  <ListGroup.Item>
    Table 3
    <Button variant="primary">Show more</Button>
  </ListGroup.Item>
  <ListGroup.Item>
    Table 4
    <Button variant="primary">Show more</Button>
  </ListGroup.Item>
</ListGroup>

  )
};

export default Home;