import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !date) {
      alert("Please fill in both fields!");
      return;
    }

    const newTask = { title, date };

    onAddTask(newTask, (newId) => {
      navigate(`/tasks/${newId}`);
    });

    setTitle("");
    setDate("");
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Row className="g-3 align-items-end">
        <Col xs={12} sm={4}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={4}>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter due date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm="auto">
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;
