import { useState } from 'react';
import './App.css';
import { Row, Col, Button } from 'react-bootstrap';
import FormInputs from './components/FormInputs';
import QAnswer from './components/QAnswer';
import { questions } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/1.jpg';

function App() {
  const [data, setData] = useState(questions);

  const addQuestion = () => {
    localStorage.setItem("items", JSON.stringify([...questions]));
    setData([...questions]);
    notify("Successfully added!", "success");
  };

  const deleteAllQ = () => {
    questions.splice(0, questions.length);
    setData([]);
    notify("All questions deleted", "success");
  };

  const deleteOneQ = (items) => {
    localStorage.removeItem("items");
    setData([...items]);
    notify("Question deleted", "success");
  };

  const notify = (message, type) => {
    type === "error" ? toast.error(message) : toast.success(message);
  };

  return (
    <div className="app-container">
      <Row>
        <Col>
          <FormInputs addQuestion={addQuestion} notification={notify} />
          <QAnswer data={data} deleteQ={deleteOneQ} />
          {data.length >= 1 && (
            <Button onClick={deleteAllQ} variant="primary" className="m-3 w-100">
              Delete All
            </Button>
          )}
        </Col>
        <Col className="text-center">
          <h2 className="app-title">Ask & Know</h2>
         
        </Col>
         <img src="./assets/1.jpg" alt="" />
      </Row>
      <ToastContainer />
    </div>
  );
}

export default App;
