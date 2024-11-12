import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { questions } from '../data';

function FormInputs({ addQuestion, notification }) {
  const [q, setQ] = useState('');
  const [an, setAn] = useState('');

  const addNewQ = (e) => {
    e.preventDefault();
    if (q === '' || an === '') {
      notification("Please enter a question and an answer", "error");
      return;
    }

    questions.push({ id: Math.random(), q, a: an });
    addQuestion();
    setQ('');
    setAn('');
  };

  return (
    <Container className="my-4 p-4 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
      <h3 className="text-center mb-4" style={{ color: '#007bff' }}>Add a New Question</h3>
      <Form onSubmit={addNewQ}>
        <Form.Group controlId="question">
          <Form.Control
            type="text"
            placeholder="Enter your question"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="answer">
          <Form.Control
            type="text"
            placeholder="Enter the answer"
            value={an}
            onChange={(e) => setAn(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Row className="text-center">
          <Col>
            <Button variant="primary" type="submit" className="w-100">
              Add New Question
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default FormInputs;
