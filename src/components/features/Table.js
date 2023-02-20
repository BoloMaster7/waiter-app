import { useForm } from "react-hook-form";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import { useState } from "react";


const TableForm = ({ action, actionText, ...props }) => {
  const [people, setPeople] = useState(props.people|| '');
  const [status, setStatus] = useState(props.author || '');
  const [bill, setBill] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [category, setCategory] = useState(props.category || '');
  const [content, setContent] = useState(props.content || '');
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false)
  const { id } = useParams();
  const maxPeople = 10

  const handleSubmit = () => {
    setContentError(!content)
    // setDateError(!publishedDate)
    // if(content && publishedDate) {
    //   action({ title, author, publishedDate, shortDescription, content, category });
    // }
  };
  return (
    
    <Row className="mb-5">
      <h1>Table {id} </h1>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3">
          <Row className="mb-3">
            <Col md={1}>
              <b>People:</b>
            </Col>
            <Form.Control
              {...register("people", { required: true })}
              className="pl-3"
              style={{
                width: "50px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              type="number"
              onChange={(e) => setPeople(e.target.value)}
              value={status === "Busy" ? people : 0}
            />
            /
            <Form.Control
              {...register("maxPeople", { required: true })}
              style={{ width: "50px", marginLeft: "10px" }}
              type="number"
              onChange={(e) => setPeople(e.target.value)}
              value={maxPeople}
            />
            {errors.people && (
              <small className="d-block form-text text-danger mt-2">
                This field is required
              </small>
            )}
            {errors.maxPeople && (
              <small className="d-block form-text text-danger mt-2">
                This field is required
              </small>
            )}
          </Row>
          <Row className="mb-3">
            <Col md={1}>
              <b>Status:</b>
            </Col>
            <Col md={2}>
              <Form.Select
                {...register("status", { required: true })}
                as="select"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                aria-label="Select category"
              >
                <option>Select category</option>
                {/* {statusData.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))} */}
              </Form.Select>
            </Col>
            {contentError && (
              <small className="d-block form-text text-danger mt-2">
                Please choose status
              </small>
            )}
          </Row>
          {status === "Busy" && (
            <Row>
              <Col md={1}>
                <Form.Label>
                  <b>Bill:</b>
                </Form.Label>
              </Col>
              <Col md={2}>
                <Form.Control
                  {...register("bill", { required: true })}
                  type="number"
                  placeholder="current bill"
                  onChange={(e) => setBill(e.target.value)}
                  value={status === "Busy" ? bill : 0}
                />
              </Col>
              {errors.bill && (
                <small className="d-block form-text text-danger mt-2">
                  This field is required
                </small>
              )}
            </Row>
          )}
        </Form.Group>
        <Button
          as="input"
          value={actionText}
          type="submit"
          style={{ marginTop: "10px" }}
        />
      </Form>
    </Row>
 
  );
}

export default TableForm;