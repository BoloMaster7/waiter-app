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
  // const [dateError, setDateError] = useState(false)
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
       
     
      </Form>
    </Row>
 
  );
}

export default TableForm;