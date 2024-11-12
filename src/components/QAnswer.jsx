import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { questions } from '../data';

function QAnswer({ data, deleteQ }) {
  const deleteItem = (ID) => {
    if (questions.length >= 1) {
      const index = questions.findIndex(item => item.id === ID);
      questions.splice(index, 1);
      deleteQ(questions);
    }
  };

  return (
    <Accordion className="my-4">
      {data.length >= 1 ? (
        data.map((item, index) => (
          <Accordion.Item key={index} eventKey={item.id} className="mb-2">
            <Accordion.Header>{item.q}</Accordion.Header>
            <Accordion.Body>
              <p>{item.q}</p>
              <p className="text-muted">{item.a}</p>
              <Button 
                variant="danger" 
                onClick={() => deleteItem(item.id)}
                className="mt-3"
                size="sm"
              >
                Delete
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))
      ) : (
        <h4 className="text-center text-muted my-4">There are no questions</h4>
      )}
    </Accordion>
  );
}

export default QAnswer;
