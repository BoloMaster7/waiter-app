import {  Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Table = (props) => {

 
  return (
    
    <Row>
    <Row className="align-items-end mb-3">
      <Col className="col-2 d-flex align-items-end justify-content-between">
        <h2 className="mb-0">Table {props.id}</h2>
      </Col>
      <Col className="col-4">
        <strong>Status:</strong> {props.status} {""}
      </Col>
      <Col className="col-6 d-flex justify-content-end">
        <Link to={"/table/" + props.id}>
          <Button variant="primary" size="sm">
            Show more
          </Button>
        </Link>
      </Col>
    </Row>
  </Row>
 
  );
}

export default Table;